import Question from './question.model.js';

export class QuestionDAO {
  // 예상 질문 생성
  async createQuestion(createQuestionDTO) {
    return await Question.create(createQuestionDTO);
  }

  // 특정 질문 조회
  async getQuestionById(question_id) {
    return await Question.findByPk(question_id);
  }

  // 특정 PPT에 대한 질문 목록 조회
  async getQuestionsByPpt(ppt_id) {
    return await Question.findAll({ where: { ppt_id } });
  }

  // 예상 질문 수정
  async updateQuestion(question_id, updateQuestionDTO) {
    const question = await Question.findByPk(question_id);
    if (!question) {
      throw new Error('Question not found');
    }
    return await question.update({ 
      question: updateQuestionDTO.question,
      answer: updateQuestionDTO.answer,
      updated_at: new Date()
    });
  }

  // 예상 질문 삭제
  async deleteQuestion(question_id) {
    const question = await Question.findByPk(question_id);
    if (!question) {
      throw new Error('Question not found');
    }
    return await Question.destroy({ where: { question_id } });
  }
}
