import { response } from "../../config/response.js";
import { status } from "../../config/response.status";
//import { getReview } from "../models/store.dao.js";
import {joinReview, joinMission} from "../services/store.service.js"
//조회 목록은 read 기능만 실행하기에 service가 필요없음.
import { getReviewPreview, getCompleteMission } from "../provider/store.provider.js";

//route랑 연결해줌
export const addReview = async(req, res, next) => {
    console.log("리뷰추가를 요청했습니다.");
    console.log("body:",req.body);
    res.send(response(status.SUCCESS, await joinReview(req.params.storeId, req.body)));
}
export const addMission = async(req,res,next) => {
    console.log("미션추가를 요청했습니다.");
    console.log("body:", req.body);
    res.send(response(status.SUCCESS, await joinMission(req.params.storeId, req.body)));
}
export const reviewPreview = async(req, res, next) =>{
    return res.send(response(status.SUCCESS, await getReviewPreview(req.params.storeId, req.query)));
}

export const completeMission = async(res, req, next)=>{
    console.log("완료된 미션 조회요청");
    return res.send(response(status.SUCCESS, await getCompleteMission(req.params.storeId, req.query)));
    //provider로 연
}
