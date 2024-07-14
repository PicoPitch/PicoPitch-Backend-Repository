
import express from "express";
import {addReview, addMission, reviewPreview, completeMission} from '../controllers/store.controller.js';
import {asyncHandler} from 'express-async-handler';
export const storeRouter = express.Router({mergeParams: true});
// 특정 가게에 대해서 리뷰 올리기
// 특정 각게에 대해서 미션 추가하기
// 특정 가게에 대해서 리뷰조회하기
// 특정 가게에 대해서 완료된 미션 조회
storeRouter.post('/:storeId/review',asyncHandler(addReview));
storeRouter.post('/:storeId/mission',asyncHandler(addMission));
storeRouter.get('/:storeId/reviews',asyncHandler(reviewPreview));
storeRouter.post('/:storeId/completeMission',asyncHandler(completeMission));
/**
 * 하위 라우팅 storeId를 사용하기 위해 옵션 값 true
 * 이전과 동일하게 DB를 사용할 예정이기에 미리 asyncHandler로 감싸줌
 */