import { Router } from "express";
import {BoardController} from './board.controller.js';

const  router = Router();
const boardController = new BoardController();

// 게시글 등록 (생성)
router.post('/', boardController.createBoard);
// 게시글 편집
router.put('/:board_id',boardController.updateBoard );
// 게시글 좋아요 표시 - post / put 인지 헷갈립니다..
router.post('/:board_id/likes',boardController.boardLike);
// 게시글 스크랩
router.post(':/board_id/scraps',boardController.boardScrap);


// 최신순 게시글 보기 기능
router.get('/',boardController.getBoardsByLatest);
// 좋아요순 게시물 보기 기능
router.get('/likes', boardController.getBoardsByLikes);
// 댓글순 게시물 보기 기능
router.get('/comments', boardController.getBoardsByComments);
// 카테고리 별로 게시물 보기 기능
router.get('/categorys/:category', boardController.getBoardsByCategorys);

// 게시물 신고
router.post('/:board_id/reports', boardController.reportBoard);
// 게시물 삭제
router.delete('/:board_id', boardController.deleteBoard);

// 사용자가 작성한 게시글 list 제공
router.get('/:user_id', boardController.userListBoard);
// 사용자가 좋아요 누른 게시글 list 제공
router.get('/:user_id/likes', boardController.userLikeListBoard);

// 사용자가 스크랩한 게시글 list 제공
router.get(':user_id/scraps',boardController.userScrapListBoard);
// 인기 게시글 list 제공
router.get('/populars', boardController.popularBoard);

export default router;
