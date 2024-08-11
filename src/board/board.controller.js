import { BoardDAO } from './board.dao.js';
import { CreateBoardDTO, UpdateBoardDTO } from './board.dto.js';
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
                //req.body.photo
                req.body.category
            );    
            const board = await boardDAO.createBoard(createBoardDTO);
            res.status(status.SUCCESS.status).json({
                status: status.SUCCESS.status,
                message: status.SUCCESS.message,
                data: board
            });
        } catch(error){
            next(error);
        }
    }
    // 게시물 수정
    async updateBoard(req, res, next) {
        const { board_id } = req.params;
        const { title, content } = req.body;
        try {
            const updated_at = new Date();
            const updateBoardDTO = new UpdateBoardDTO(title, content, updated_at);

            const updatedBoard = await boardDAO.updateBoard(board_id, updateBoardDTO);
            if (updatedBoard === null) {
                res.status(status.NOT_FOUND.status).json({
                    status: status.NOT_FOUND.status,
                    message: 'Board not found'
                });
            } else {
                res.status(status.SUCCESS.status).json({
                    status: status.SUCCESS.status,
                    message: 'Board updated successfully',
                    data: updatedBoard
                });
            }
        } catch (error) {
            next(error);
        }
    }

    // 게시물 삭제 기능
    async deleteBoard(req, res, next) {
        try {
            const { board_id } = req.params;
            const { user_id } = req.body;
            if (!user_id){
                return res.status(401).send(response({ status: 401, isSuccess: false, message: 'User ID is required' }));
            }
            const deletedboard = await boardDAO.deleteBoard(board_id, user_id);
            res.status(status.SUCCESS.status).json({
                status: status.SUCCESS.status,
                message: status.SUCCESS.message,
                data: deletedboard
            });
        }catch(error){
            next(error);
        }
    }

    // 게시물 신고 기능 - 신고 카테고리 3개 중에 int로 선택
    async reportBoard(req, res, next){
        try {
            const { board_id } = req.params;
            const { reasons, user_id } = req.body; 
            if (!user_id) {
                return res.status(401).send(response({ status: 401, isSuccess: false, message: 'User ID is required' }));
            }
            const reportboard = await boardDAO.reportBoard(board_id, user_id, reasons);
            res.status(status.SUCCESS.status).json({
                status: status.SUCCESS.status,
                message: status.SUCCESS.message,
                data: reportboard
            });
        } catch (error) {
            next(error);
        }
    }

    // 게시물 좋아요 기능
    async boardLike(req, res, next) {
        //console.log("컨트롤러 시작")
        try {
            const { board_id } = req.params;
            const { user_id } = req.body;
            // 좋아요가 눌려져 있는지
            const isLiked = await boardDAO.isUserLikedBoard(board_id, user_id);
            let result ;
            //console.log("컨트롤러 : ", isLiked);
            if (isLiked) {
                //true 경우
                result = await boardDAO.removeLike(board_id, user_id);
                res.status(200).json({
                    status: 200,
                    message: 'Like removed successfully',
                    data: result
                });
            }else{
                //false 경우
                result = await boardDAO.addLike(board_id, user_id);
                res.status(200).json({
                    status: 200,
                    message: 'Like added successfully',
                    data: result
                });
            }
            res.status(status.SUCCESS.status).json({
                status: status.SUCCESS.status,
                message: status.SUCCESS.message,
                data : result
            });
        }catch(error){
            next(error);
        }
    }

    // 게시물 스크랩 기능
    async boardScrap(req, res, next){
        //console.log("컨트롤 시작");
        try{
            const { board_id } = req.params;
            const { user_id } = req.body;
            //사용자가 스크랩을 했는지
            const isScraped = await boardDAO.isUserScrapedBoard(board_id, user_id);
            let scrapresult ;
            if (isScraped){
                //true
                scrapresult = await boardDAO.removeScrap(board_id, user_id);
                res.status(200).json({
                    status: 200,
                    message: 'Scrap removed successfully',
                    data: scrapresult
                });
            }else{
                //false
                scrapresult = await boardDAO.addScrap(board_id, user_id);
                res.status(200).json({
                    status: 200,
                    message: 'Scrap added successfully',
                    data: scrapresult
                });
            }   
            res.status(status.SUCCESS.status).json({
                status: status.SUCCESS.status,
                message: status.SUCCESS.message,
                data : scrapresult
            });
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
            res.status(status.SUCCESS.status).json({
                status: status.SUCCESS.status,
                message: status.SUCCESS.message,
                data : userBoard
            });

        }catch(error){
            next(error);
        }
    }
    //  사용자가 좋아요한 순으로 list 
    async userLikeListBoard(req, res, next){
        const {user_id} = req.params;
        try{
            const userLikedBoard = await boardDAO.getUserLikedBoard(user_id);
            res.status(status.SUCCESS.status).json({
                status: status.SUCCESS.status,
                message: status.SUCCESS.message,
                data : userLikedBoard
            });

        }catch(error){
            next(error);
        }
    }
    // 스크랩순으로 list 올리기
    async userScrapListBoard(req, res, next){
        const {user_id} = req.params;
        try {
            const userScrapedBoard = await boardDAO.getUserScrapedBoard(user_id);
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
    async getBoards(req,res, next){
        const { category, sortBy } = req.params;
        const vaildCategories = ['꿀팁', '자유 게시판'];
        if (!vaildCategories.includes(category)){
            return res.status(status.BAD_REQUEST.status).send(response(status.BAD_REQUEST, "유효하지 않은 카테고리입니다."));
        }
        try {
            const getboards = await boardDAO.getBoards(category, sortBy);
            if (this.boardScrap.length === 0 ){
                return res.status(status.NOT_FOUND.status).send(response(status.NOT_FOUND, "해당 카테고리에 게시물이 없습니다."));
            }
            return res.status(status.SUCCESS.status).send(response(status.SUCCESS, getboards));
        }catch(error){
            next(error);
        }
    }   
}