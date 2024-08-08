import { QuestionDAO } from './question.dao.js';
import { CreateQuestionDTO, UpdateQuestionDTO } from './question.dto.js';
import { response } from '../../config/response.js';
import { status } from '../../config/response.status.js';

const questionDAO = new QuestionDAO();

export class QuestionController {
  async createQuestion(req, res, next) {
    try {
      const createQuestionDTO = new CreateQuestionDTO(
        req.body.user_id,
        req.body.ppt_id,
        req.body.script_id,
        req.body.question,
        req.body.answer
      );
      const question = await questionDAO.createQuestion(createQuestionDTO);
      res.status(status.SUCCESS.status).send(response(status.SUCCESS, question));
    } catch (error) {
      next(error);
    }
  }

  async getQuestionById(req, res, next) {
    try {
      const { question_id } = req.params;
      const question = await questionDAO.getQuestionById(question_id);
      if (!question) {
        return res.status(status.NOT_FOUND.status).send(response(status.NOT_FOUND, "Question not found"));
      }
      res.status(status.SUCCESS.status).send(response(status.SUCCESS, question));
    } catch (error) {
      next(error);
    }
  }

  async getQuestionsByPpt(req, res, next) {
    try {
      const { ppt_id } = req.params;
      const questions = await questionDAO.getQuestionsByPpt(ppt_id);
      res.status(status.SUCCESS.status).send(response(status.SUCCESS, questions));
    } catch (error) {
      next(error);
    }
  }

  async updateQuestion(req, res, next) {
    try {
      const { question_id } = req.params;
      const { question, answer } = req.body;
      const updateQuestionDTO = new UpdateQuestionDTO(question, answer);
      await questionDAO.updateQuestion(question_id, updateQuestionDTO);
      res.status(status.SUCCESS.status).send(response(status.SUCCESS, { question_id }));
    } catch (error) {
      next(error);
    }
  }

  async deleteQuestion(req, res, next) {
    try {
      const { question_id } = req.params;
      await questionDAO.deleteQuestion(question_id);
      res.status(status.SUCCESS.status).send(response(status.SUCCESS, { question_id }));
    } catch (error) {
      next(error);
    }
  }
}
