import { Comment } from './comment.model.js';

export class CommentDAO {
  async createComment(createCommentDTO) {
    return await Comment.create(createCommentDTO);
  }

  async getCommentsByBoardId(board_id, current_user_id) {
    return await Comment.findAll({
      where: { board_id },
      include: [
        {
          model: User,
          attributes: ['nickname']
        },
        {
          model: CommentLike,
          attributes: []
        }
      ],
      attributes: [
        'comment_id',
        'content',
        'created_at',
        'parent_comment_id',
        [sequelize.fn('COUNT', sequelize.col('CommentLikes.C_like_id')), 'like_count']
      ],
      group: ['Comment.comment_id', 'User.nickname']
    }).then(comments => {
      return comments.map(comment => {
        const data = comment.toJSON();
        // 본인이 작성한 게시글에 달린 댓글 처리
        if (comment.user_id === current_user_id) {
          data.User.nickname = '작성자';
        }
        return data;
      });
    });
  }

  async updateComment(comment_id, content) {
    return await Comment.update(
      { content, updated_at: new Date() }, // 수정 시 updated_at 필드 업데이트
      { where: { comment_id } }
    );
  }

  async deleteComment(comment_id, user_id) {
    // 댓글이 실제로 존재하는지 확인
    const comment = await Comment.findOne({ where: { comment_id } });
    
    if (!comment) {
      throw new Error('Comment not found');
    }

    //본인 댓글만 삭제하도록 하기
    if (comment.user_id !== user_id) {
      throw new Error('Unauthorized to delete this comment');
    }

    return await Comment.destroy({ where: { comment_id } });
  }

  async toggleLike(comment_id, user_id) {
    const [like, created] = await CommentLike.findOrCreate({
      where: { comment_id, user_id },
      defaults: { created_at: new Date() }
    });
    
    if (!created) { // 이미 좋아요를 눌렀다면, 좋아요를 취소
      await like.destroy();
      return 'removed';
    } else {
      return 'added';
    }
  }

  async getLikeCount(comment_id) {
    return await CommentLike.count({ where: { comment_id } });
  }
}
