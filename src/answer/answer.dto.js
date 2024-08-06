export class CreateAnswerDTO {
    constructor(question_id, user_id, content) {
      this.question_id = question_id;
      this.user_id = user_id;
      this.content = content;
    }
  }
  