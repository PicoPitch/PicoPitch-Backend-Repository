import { Router } from 'express';
import { AnswerController } from './answer.controller.js';

const router = Router();
const answerController = new AnswerController();

router.post('/', answerController.createAnswer);
router.get('/:answer_id', answerController.getAnswer);
router.patch('/:answer_id', answerController.updateAnswer);
router.delete('/:answer_id', answerController.deleteAnswer);

export default router; 
