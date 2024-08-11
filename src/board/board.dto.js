export class CreateBoardDTO{
    constructor(user_id,title,content,category = null){
        this.user_id = user_id;
        this.title = title;
        this.content = content;
        this.category = category;
    }
}
export class UpdateBoardDTO{
    constructor(title , content, updated_at){
        this.title = title;
        this.content = content;
        this.updated_at = updated_at;
    }
}
