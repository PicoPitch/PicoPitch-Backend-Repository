import { Comment } from './comment.model.js';

export class CommentDAO {
  async createComment(createCommentDTO) {
    return await Comment.create(createCommentDTO);
  }

  async getCommentsByBoardId(board_id) {
    return await Comment.findAll({ where: { board_id } });
  }

  async updateComment(comment_id, content) {
    return await Comment.update({ content }, { where: { comment_id } });
  }

  async deleteComment(comment_id) {
    return await Comment.destroy({ where: { comment_id } });
  }
}
