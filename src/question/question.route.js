import { Router } from 'express';
import { QuestionController } from './question.controller.js';

const router = Router();
const questionController = new QuestionController();

router.post('/', questionController.createQuestion);
// 생성된 예상 질문 조회
router.get('/:question_id', questionController.getQuestionById);
// 생성된 예상 질문 목록 조회 (특정 PPT, 대본에 대한 질문들)
router.get('/ppt/:ppt_id', questionController.getQuestionsByPpt);
// 생성된 예상 질문 수정
router.patch('/:question_id', questionController.updateQuestion);
router.delete('/:question_id', questionController.deleteQuestion);

export default router;
