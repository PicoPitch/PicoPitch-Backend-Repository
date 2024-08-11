import Comment from './comment.model.js';
import CommentLike from './commentLike.model.js';
import User from '../user/user.model.js';
import CommentReport from './commentReport.model.js';
import sequelize from '../../config/db.connect.js';

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
        if (comment.user_id === current_user_id) {
          data.User.nickname = '작성자';
        }
        return data;
      });
    });
  }

  async updateComment(comment_id, content) {
    return await Comment.update(
      { content, updated_at: new Date() },
      { where: { comment_id } }
    );
  }

  async deleteComment(comment_id, user_id) {
    const comment = await Comment.findOne({ where: { comment_id } });

    if (!comment) {
      throw new Error('Comment not found');
    }

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

    if (!created) {
      await like.destroy();
      return 'removed';
    } else {
      return 'added';
    }
  }

  async getLikeCount(comment_id) {
    return await CommentLike.count({ where: { comment_id } });
  }

  async reportComment(comment_id, user_id, reason) {
    return await CommentReport.create({ comment_id, user_id, reason });
  }
}