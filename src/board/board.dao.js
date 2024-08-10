import Board from './board.model.js';
import BoardLike from './boardLike.model.js';
import BoardScrap from './boardScrap.model.js';
import BoardReport from './boardReport.model.js';
import { Op } from 'sequelize';

export class boardDAO{
    // 게시물 생성
    async createBoard(createBoardDTO){
        return await Board.create(createBoardDTO);
    }
    // 게시물 수정
    async updateBoard(board_id, updateBoardDTO){
        // 게시물을 찾아서 업데이트
        const [updated] = await Board.update(updateBoardDTO,{
          where : {board_id},  
        });
        if(updated){
            //업데이트 성공시 , 해당 게시물 다시 찾아서 반환
            return await Board.findOne({where : {board_id}});
        } 
        return null;
    }
    // 게시물 좋아요 기능
    async isUserLikedBoard(board_id, user_id){
        //확인
        return await BoardLike.findOne({
            where: {board_id, user_id}
        });
    }
    async removeLike(board_id, user_id){
        // 취소 - 특정 조건에 맞는 레코드 삭제
        await BoardLike.restroy({
            where: {board_id, user_id}
        });
        // 특정 필드의 값 감소, 그 결과를 데이터베이스 저장
        await Board.decrement('like_count' , {where : {board_id}});
        return {message : "like is removed"};
    }
    async addLike(board_id, user_id){
        // 추가 - 새로운 레코드를 데이터베이스 테이블에 추가
        await BoardLike.create({
            where :{board_id, user_id}
        });
        //특정 필드의 값 증가, 데이터베이스 저장
        await Board.increment('like_count', {where : {board_id}});
        return {message : "like is added"};
    }
    // 게시물 스크랩 기능
    async isUserScrapedBoard(board_id, user_id){
        return await BoardScrap.findOne({
            where : {board_id, user_id}
        });
    }
    async removeScrap(board_id, user_id){
        await BoardScrap.restroy({
            where :{board_id, user_id}
        });
        await Board.decrement('scrap_count', {where : {board_id}});
        return {message : "scrap is removed"};
    }
    async addScrap(board_id, user_id){
        await BoardScrap.create({
            where :{board_id, user_id}
        });
        await Board.increment('scrap_count', {where : {board_id}});
        return {message : "scrap is added"};
    }
    // 게시물 신고 기능
    async  reportBoard (board_id , user_id, reason){
        await BoardReport.create({board_id, user_id, reason});
        return {message : '게시물 신고가 완료되었습니다'};
    }
    // 게시물 삭제 기능
    async deleteBoard (board_id, user_id){
        const board = await Board.findOne({where : (board_id)});
        if (!board){
            throw new Error('Board not found');
        }else if(board.user_id !== user_id){
            throw new Error('You cannot delete this Board');
        }else{
            return await Board.destroy({where :{board_id}});
        }
    }
    // 사용자 최신순 작성한 게시물 list
    async getUserListBoard( user_id ){
        return await Board.findAll({
            where :{user_id},
            order : [['created_at' , 'DESC']]
        });
    }
    // 사용자가 좋아요 누른 게시물 list
    async getUserLikedBoard(user_id){
        return await Board.findAll({
            include : [{
                model : 'BoardLikes',
                where : {user_id}
            }],
            order : [['created_at', 'DESC']]
        });
    }
    // 사용자가 스크랩한 게시물 list
    async getUserScrapedBoard(user_id){
        return await Board.findAll({
            include : [{
                model : 'BoardScraps',
                where : {user_id}
            }],
            order :  [['created_at', 'DESC']]
        });
    }
    // 인기 게시글 list
    async getPopularBoards(){
        //최근 일주일간
        const week =  new Date();
        week.setDate(weel.getDate()- 7);
        return await Board.findAll({
            where  : {
                like_count:{
                    [Op.gte] : 10 // like_count 가 10개 이상
                },
                created_at : {
                    [Op.gte] : week // 최근 일주일간
                }
            },
            order :[['like_count','DESC'], ['created_at', 'DESC']],
            limit : 10 // 상위 10개만
        });   
    }
    // 게시물 보기 기능
    async getBoardss(category, sortBy){
        let sort ;
        switch(sortBy){
            case 'likes':
                sort = [['like_count', 'DESC']];
                break;
            case 'comments':
                sort = [['comment_count', 'DESC']];
                break;
            case 'recent':
            default:
                sort = [['created_at', 'DESC']];
                break;
        }
        
        return await Board.findAll({
            where : { category : category},
            order : sort
        });
    }
}
