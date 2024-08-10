import {BoardDAO} from './board.dao.js';
import {CreateBoardDTO} from './board.dto.js';
import {UpdateBoardDTO} from './board.dto.js';
import {response} from '../../config/response.js';
import { status } from '../../config/response.status.js';

const boardDAO = new  BoardDAO();

export class BoardController{
    // 게시물 생성
    async createBoard(req, res, next){
        try {
            const createBoardDTO = new CreateBoardDTO(
                //req.body.board_id
                req.body.user_id,
                req.body.title,
                req.body.content,
                //req.body.photo,
                req.body.category
            );    
            const board = await boardDAO.createBoard(createBoardDTO);
            res.status(status.SUCCESS.status).send(response(status.SUCCESS, board));
        } catch(error){
            next(error);
        }
    }
    // 게시물 수정
    async updateBoard(req, res, next) {
        const  {board_id} = req.params;
        const  {title,content} = req.body;
        try{
        const updated_at = new Date();
        
        const updateBoardDTO= new  UpdateBoardDTO( title, content, updated_at);

        const updatedBoard = await boardDAO.updateBoard(board_id,updateBoardDTO);
        if(updatedBoard){
            res.status(status.SUCCESS.status).send(response(status.SUCCESS, updatedData));
        }else {
            res.status(status.NOT_FOUND.status).send(response(status.NOT_FOUND, 'board is not found'));
        }
        }catch(error){
        next(error);
        }
    }
    // 게시물 좋아요 기능
    async boardLike(req, res, next){
        const {board_id } = req.params;
        const {user_id} = req.user_id;
        try {
            // 좋아요가 눌려져 있는지
            const isLiked = await boardDAO.isUserLikedBoard(board_id, user_id);
            let result ;
            if (isLiked) {
                //true 경우
                result = await boardDAO.removeLike(board_id, user_id);
                
            }else{
                //false 경우
                result = await boardDAO.addLike(board_id, user_id);
            }
            res.status(status.SUCCESS.status).send(response(status.SUCCESS, result));
        }catch(error){
            next(error);
        }
    }
    // 게시물 스크랩 기능
    async boardScrap(req, res, next){
        const {board_id} = req.params;
        const {user_id} = res.user_id;
        try{
            //사용자가 스크랩을 했는지
            const isScraped = await boardDAO.isUserScrapedBoard(board_id, user_id);
            let result ;
            if (isScraped){
                //true
                result = await boardDAO.removeScrap(board_id, user_id);
            }else{
                //false
                result = await boardDAO.addScrap(board_id, user_id);
            }   
            res.status(status.SUCCESS.status).send(response(status.SUCCESS, result));
        }catch(error){
            next(error);
        }
    }
    // 게시물 신고 기능
    async reportBoard(req, res, next){
        const {board_id} = req.params;
        const {user_id} = req.user_id;
        const {reason} =req.body;
        // reason이 신고 사유에 잇다면 신고 제출할 수 있다.
        // 제출 하고 문구 
        try{
            const vaildReasons = ['유해한 주제','관련없는 주제','욕설 및 비방'];
            if (!vaildReasons.includes(reason)) {
                return res.status(status.BAD_REQUEST.status).send(response(status.BAD_REQUEST, { message: '유효하지 않은 신고 사유입니다.' }));
            }
            const result = await boardDAO.reportBoard(board_id, user_id, reason);
            res.status(status.SUCCESS.status).send(response(status.SUCCESS, result));
        } catch (error) {
            next(error);
        }
    }
    // 게시물 삭제 기능
    async deleteBoard(req, res, next) {
        const {board_id} = req.params;
        const {user_id} = req.user_id;
        try {
            await boardDAO.deleteBoard(board_id, user_id);
            res.status(status.SUCCESS.status).send(response(status.SUCCESS, {board_id}));
        }catch(error){
            next(error);
        }
    }
    // 게시물 list 올리기
    async userListBoard(req, res, next){
        const {user_id} = req.params;
        try{
            //사용자가 작성한 게시물을 보여주기
            const userBoard = await boardDAO.getUserListBoard(user_id);
            res.status(status.SUCCESS.status).send(response(status.SUCCESS, userBoard));

        }catch(error){
            next(error);
        }
    }
    //  사용자가 좋아요한 순으로 list 
    async userLikeListBoard(req, res, next){
        const {user_id} = req.params;
        try{
            const userLikedBoard = await boardDAO.getUserLikedBoard(user_id);
            res.status(status.SUCCESS.status).send(response(status.SUCCESS, userLikedBoard));

        }catch(error){
            next(error);
        }
    }
    // 스크랩순으로 list 올리기
    async userScrapListBoard(req, res, next){
        const {user_id} = req.params;
        try {
            const userScrapedBoard = await boardDAO.getUserScrapedBoaard(user_id);
            res.status(status.SUCCESS.status).send(response(status.SUCCESS, userScrapedBoard));
        }catch(error){
            next(error);
        }
    }
    //  인기 게시글 list
    async popularBoard(req, res, next){
        try {
            const popularBoards = await boardDAO.getPopularBoards();
            if (popularBoards.length == 0 ){
                return res.status(status.NO_BOARD.status).send(response(status.NO_BOARD, "추천 게시물이 없어요 !"));
            }
            return res.status(status.SUCCESS.status).send(response(status.SUCCESS, popularBoards));
        }catch(error){
            next(error);
        }
    }
    // 최신순 게시물 보기 기능
    async getBoardsByLatest(req,res, next){
        try {
            const boardsByLatest = await boardDAO.getBoardsByLatest();
            if (boardsByLatest.length === 0){
                return res.status(status.NO_BOARD.status).send(response(status.NO_BOARD, "게시물이 없습니다"));
            }
            res.status(status.NO_BOARD.status).send(response(status.NO_BOARD, boardsByLatest));
        }catch(error){
            next(error);
        }
    }
    // 좋아요순 게시물 보기 기능
    async getBoardsByLikes(req, res, next){
        try {
            const boardsByLikes = await boardDAO.getBoardsByLikes();
            if (boardsByLikes.length === 0){
                return res.status(status.NO_BOARD.status).send(response(status.NO_BOARD, "게시물이 없습니다"));
            }
            res.status(status.NO_BOARD.status).send(response(status.NO_BOARD, boardsByLikes));
        }catch(error){
            next(error);
        }
    }
    // 댓글순 게시물 보기 기능
    async getBoardsByComments(req, res, next){
        try {
            const boardsByComments = await boardDAO.getBoardsByComments();
            if (boardsByComments.length === 0){
                return res.status(status.NO_BOARD.status).send(response(status.NO_BOARD, "게시물이 없습니다"));
            }
            res.status(status.NO_BOARD.status).send(response(status.NO_BOARD, boardsByComments));
        }catch(error){
            next(error);
        }
    }
    // 카테고리별 게시물 보기 기능
    async getBoardsByCategorys(req, res, next){
        const { category } = req.params;
        const vaildCategories =['꿀팁', '자유 게시물'];
        if (!vaildCategories.includes(category)){
            return res.status(status.BAD_REQUEST.status).send(response(status.BAD_REQUEST, "유효하지 않은 케테고리입니다."));
        }
        try {
            const boardsByCategorys = await boardDAO.getBoardsByCategorys(category);
            if (boardsByCategorys.length === 0){
                return res.status(status.NO_BOARD.status).send(response(status.NO_BOARD, "게시물이 없습니다"));
            }
            res.status(status.NO_BOARD.status).send(response(status.NO_BOARD, boardsByCategorys));
        }catch(error){
            next(error);
        }
    }
    
    
}
/**
 * // 최신순 게시글 보기 기능
router.get('/',boardController.getBoards);
// 좋아요순 게시물 보기 기능
router.get('/likes', boardController.getBoardsByLikes);
// 댓글순 게시물 보기 기능
router.get('/comments', boardController.getBoardsByComments);
// 카테고리 별로 게시물 보기 기능
router.get('/categorys', boardController.getBoardsByCategory);

 */