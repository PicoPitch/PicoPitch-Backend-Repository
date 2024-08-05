import { Router } from 'express';
import { CommentController } from './comment.controller.js';

const router = Router();
const commentController = new CommentController();

router.post('/', commentController.createComment);
router.get('/:board_id', commentController.getComments);
router.put('/:comment_id', commentController.updateComment);
router.delete('/:comment_id', commentController.deleteComment);

export { router as commentRoute };
