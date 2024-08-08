export class CreateCommentDTO {
  constructor(board_id, user_id, content, parent_comment_id = null) {
    this.board_id = board_id;
    this.user_id = user_id;
    this.content = content;
    this.parent_comment_id = parent_comment_id;
  }
}
