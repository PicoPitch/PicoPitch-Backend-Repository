import Answer from './answer.model.js';

export class AnswerDAO {
  async createAnswer(createAnswerDTO) {
    return await Answer.create(createAnswerDTO);
  }

  async getAnswerById(answer_id) {
    return await Answer.findByPk(answer_id);
  }

  async updateAnswer(answer_id, content) {
    return await Answer.update(
      { content, updated_at: new Date() },
      { where: { answer_id } }
    );
  }

  async deleteAnswer(answer_id) {
    const answer = await Answer.findOne({ where: { answer_id } });
    if (!answer) {
      throw new Error('Answer not found');
    }
    return await Answer.destroy({ where: { answer_id } });
  }
}
