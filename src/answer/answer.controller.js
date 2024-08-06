import { AnswerDAO } from './answer.dao.js';
import { CreateAnswerDTO } from './answer.dto.js';
import { response } from '../../config/response.js';
import { status } from '../../config/response.status.js';

const answerDAO = new AnswerDAO();

export class AnswerController {
  async createAnswer(req, res, next) {
    try {
      const createAnswerDTO = new CreateAnswerDTO(
        req.body.question_id,
        req.body.user_id,
        req.body.content
      );
      const answer = await answerDAO.createAnswer(createAnswerDTO);
      res.status(status.SUCCESS.status).send(response(status.SUCCESS, answer));
    } catch (error) {
      next(error);
    }
  }

  async getAnswer(req, res, next) {
    try {
      const { answer_id } = req.params;
      const answer = await answerDAO.getAnswerById(answer_id);
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
      const { answer_id } = req.params;
      const { content } = req.body;
      await answerDAO.updateAnswer(answer_id, content);
      res.status(status.SUCCESS.status).send(response(status.SUCCESS, { answer_id }));
    } catch (error) {
      next(error);
    }
  }

  async deleteAnswer(req, res, next) {
    try {
      const { answer_id } = req.params;
      await answerDAO.deleteAnswer(answer_id);
      res.status(status.SUCCESS.status).send(response(status.SUCCESS, { answer_id }));
    } catch (error) {
      next(error);
    }
  }
}
