export class CreateQuestionDTO {
    constructor(user_id, ppt_id, script_id, question, answer) {
        this.user_id = user_id;
        this.ppt_id = ppt_id;
        this.script_id = script_id;
        this.question = question;
        this.answer = answer;
    }
}

export class UpdateQuestionDTO {
    constructor(question, answer) {
      this.question = question;
      this.answer = answer;
    }
}