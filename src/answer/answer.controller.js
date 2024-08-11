import { CreateAnswerDTO } from './answer.dto.js';
import { response } from '../../config/response.js';
import { status } from '../../config/response.status.js';
import ExpectedQuestion from '../question/question.model.js';  

export class AnswerController {
  async createAnswer(req, res, next) {
    try {
      const { question_id, user_id, answer, ppt_id, question } = req.body;
      const createAnswerDTO = new CreateAnswerDTO(question_id, user_id, answer, ppt_id, question);
      const updatedQuestion = await ExpectedQuestion.update(
        { answer }, // 기존 ExpectedQuestion에 answer를 업데이트
        { where: { question_id, ppt_id, question } } // question_id, ppt_id, question로 찾음
      );

      if (updatedQuestion[0] === 0) {
        return res.status(status.NOT_FOUND.status).send(response(status.NOT_FOUND, "Question not found"));
      }

      res.status(status.SUCCESS.status).send(response(status.SUCCESS, createAnswerDTO));
    } catch (error) {
      next(error);
    }
  }

  async getAnswer(req, res, next) {
    try {
      const { question_id } = req.params;
      const answer = await ExpectedQuestion.findOne({ where: { question_id } });
      if (!answer) {
        return res.status(status.NOT_FOUND.status).send(response(status.NOT_FOUND, "Answer not found"));
      }
      res.status(status.SUCCESS.status).send(response(status.SUCCESS, answer));
    } catch (error) {
      next(error);
    }
  }

  async updateAnswer(req, res, next) {
    try {
      const { question_id } = req.params;
      const { answer } = req.body;
      await ExpectedQuestion.update(
        { answer, updated_at: new Date() },
        { where: { question_id } }
      );
      res.status(status.SUCCESS.status).send(response(status.SUCCESS, { question_id }));
    } catch (error) {
      next(error);
    }
  }

  async deleteAnswer(req, res, next) {
    try {
      const { question_id } = req.params;
      await ExpectedQuestion.destroy({ where: { question_id } });
      res.status(status.SUCCESS.status).send(response(status.SUCCESS, { question_id }));
    } catch (error) {
      next(error);
    }
  }
}
