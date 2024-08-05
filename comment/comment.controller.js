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
    const { user_id } = req.query; 
    
    try {
      const comments = await commentDAO.getCommentsByBoardId(board_id, user_id);
      res.status(200).send(response(status.SUCCESS, 'Comments retrieved', comments));
    } catch (error) {
      next(error);
    }
  }

  async updateComment(req, res, next) {
    const { comment_id } = req.params;
    const { content } = req.body;
    
    if (!content) {
      return res.status(400).send(response(status.FAILURE, 'Content is required'));
    }

    try {
      await commentDAO.updateComment(comment_id, content);
      res.status(200).send(response(status.SUCCESS, 'Comment updated'));
    } catch (error) {
      next(error);
    }
  }

  async deleteComment(req, res, next) {
    const { comment_id } = req.params;
    const { user_id } = req.body;
    
    try {
      await commentDAO.deleteComment(comment_id, user_id);
      res.status(200).send(response(status.SUCCESS, '댓글이 삭제되었습니다'));
    } catch (error) {
      next(error);
    }
  }

  async toggleLike(req, res, next) {
    const { comment_id } = req.params;
    const { user_id } = req.body;
    
    try {
      const result = await commentDAO.toggleLike(comment_id, user_id);
      const likeCount = await commentDAO.getLikeCount(comment_id);
      
      if (result === 'removed') {
        res.status(200).send(response(status.SUCCESS, 'Like removed', { likeCount }));
      } else {
        res.status(200).send(response(status.SUCCESS, 'Like added', { likeCount }));
      }
    } catch (error) {
      next(error);
    }
  }

  async reportComment(req, res, next) {
    const { comment_id } = req.params;
    const { user_id, reason } = req.body;

    if (!['유해 정보 포함', '욕설 및 비방', '악성 댓글'].includes(reason)) {
      return res.status(400).send(response(status.FAILURE, 'Invalid reason'));
    }

    try {
      await commentDAO.reportComment(comment_id, user_id, reason);
      res.status(201).send(response(status.SUCCESS, '댓글 신고를 완료했습니다.'));
    } catch (error) {
      next(error);
    }
  }
}
