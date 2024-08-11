export class CreateAnswerDTO {
  constructor(question_id, user_id, answer, ppt_id, question) {
    this.question_id = question_id;
    this.user_id = user_id;
    this.answer = answer;
    this.ppt_id = ppt_id;
    this.question = question;
  }
}
