import { Router } from 'express';
import { AnswerController } from './answer.controller.js';

const router = Router();
const answerController = new AnswerController();

router.post('/', answerController.createAnswer);
router.get('/:question_id', answerController.getAnswer);
router.patch('/:question_id', answerController.updateAnswer);
router.delete('/:question_id', answerController.deleteAnswer);

export default router;
