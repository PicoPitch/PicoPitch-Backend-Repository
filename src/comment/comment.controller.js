import { CommentDAO } from './comment.dao.js';
import { CreateCommentDTO } from './comment.dto.js';
import { response } from '../../config/response.js';
import { status } from '../../config/response.status.js';

const commentDAO = new CommentDAO();

export class CommentController {
  async createComment(req, res, next) {
    try {
      const createCommentDTO = new CreateCommentDTO(
        req.body.board_id,
        req.body.user_id,
        req.body.content,
        req.body.parent_comment_id
      );
      const comment = await commentDAO.createComment(createCommentDTO);
      res.status(status.SUCCESS.status).send(response(status.SUCCESS, comment));
    } catch (error) {
      next(error);
    }
  }

  async getComments(req, res, next) {
    try {
      const { board_id } = req.params;
      const current_user_id = req.user.id; // assuming user ID is attached to the request object
      const comments = await commentDAO.getCommentsByBoardId(board_id, current_user_id);
      res.status(status.SUCCESS.status).send(response(status.SUCCESS, comments));
    } catch (error) {
      next(error);
    }
  }

  async updateComment(req, res, next) {
    try {
      const { comment_id } = req.params;
      const { content } = req.body;
      await commentDAO.updateComment(comment_id, content);
      res.status(status.SUCCESS.status).send(response(status.SUCCESS, { comment_id }));
    } catch (error) {
      next(error);
    }
  }

  async deleteComment(req, res, next) {
    try {
      const { comment_id } = req.params;
      const user_id = req.user.id; // assuming user ID is attached to the request object
      await commentDAO.deleteComment(comment_id, user_id);
      res.status(status.SUCCESS.status).send(response(status.SUCCESS, { comment_id }));
    } catch (error) {
      next(error);
    }
  }

  async toggleLike(req, res, next) {
    try {
      const { comment_id } = req.params;
      const user_id = req.user.id; // assuming user ID is attached to the request object
      const result = await commentDAO.toggleLike(comment_id, user_id);
      res.status(status.SUCCESS.status).send(response(status.SUCCESS, { action: result }));
    } catch (error) {
      next(error);
    }
  }

  async reportComment(req, res, next) {
    try {
      const { comment_id } = req.params;
      const { reason } = req.body;
      const user_id = req.user.id; // assuming user ID is attached to the request object
      await commentDAO.reportComment(comment_id, user_id, reason);
      res.status(status.SUCCESS.status).send(response(status.SUCCESS, { comment_id }));
    } catch (error) {
      next(error);
    }
  }
}
