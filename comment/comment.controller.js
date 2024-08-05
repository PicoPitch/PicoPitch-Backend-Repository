import { CommentDAO } from './comment.dao.js';
import { CreateCommentDTO } from './comment.dto.js';
import { response } from '../../config/response.js';
import { status } from '../../config/response.status.js';

const commentDAO = new CommentDAO();

export class CommentController {
  async createComment(req, res, next) { //새 댓글 생성
    const { board_id, user_id, content, parent_comment_id } = req.body;
    const createCommentDTO = new CreateCommentDTO(board_id, user_id, content, parent_comment_id);
    
    try {
      const comment = await commentDAO.createComment(createCommentDTO);
      res.status(201).send(response(status.SUCCESS, 'Comment created', comment));
    } catch (error) {
      next(error);
    }
  }

  async getComments(req, res, next) {
    const { board_id } = req.params;
    
    try {
      const comments = await commentDAO.getCommentsByBoardId(board_id);
      res.status(200).send(response(status.SUCCESS, 'Comments retrieved', comments));
    } catch (error) {
      next(error);
    }
  }

  async updateComment(req, res, next) {
    const { comment_id } = req.params;
    const { content } = req.body;
    
    try {
      await commentDAO.updateComment(comment_id, content);
      res.status(200).send(response(status.SUCCESS, 'Comment updated'));
    } catch (error) {
      next(error);
    }
  }

  async deleteComment(req, res, next) {
    const { comment_id } = req.params;
    
    try {
      await commentDAO.deleteComment(comment_id);
      res.status(200).send(response(status.SUCCESS, 'Comment deleted'));
    } catch (error) {
      next(error);
    }
  }
}
