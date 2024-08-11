import express from 'express';
import { BoardController } from './board.controller.js';

export const boardRoute = express.Router();

const boardController = new BoardController();

// 게시글 등록 (생성)
boardRoute.post('/', boardController.createBoard);
// 게시글 편집
boardRoute.put('/:board_id',boardController.updateBoard );

// 게시물 신고
boardRoute.post('/:board_id/reports', boardController.reportBoard);
// 게시물 삭제
boardRoute.delete('/:board_id', boardController.deleteBoard);



// 게시글 좋아요 표시 - post / put 인지 헷갈립니다..
boardRoute.post('/:board_id/likes',boardController.boardLike);
// 게시글 스크랩
boardRoute.post('/:board_id/scraps',boardController.boardScrap);

/**
 * 우선순위에 대해서 수정해야함 param를 2개 받아야함 :  category, sortBy
 * 맨 처음 보이는 설정은 최신순으로
 */
boardRoute.get('/categorys/:category/sort/:sortBy',boardController.getBoards);



// 사용자가 작성한 게시글 list 제공
boardRoute.get('/:user_id', boardController.userListBoard);
// 사용자가 좋아요 누른 게시글 list 제공
boardRoute.get('/:user_id/likes', boardController.userLikeListBoard);

// 사용자가 스크랩한 게시글 list 제공
boardRoute.get(':user_id/scraps',boardController.userScrapListBoard);
// 인기 게시글 list 제공
boardRoute.get('/populars', boardController.popularBoard);

