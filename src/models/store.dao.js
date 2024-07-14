//database 연결
//sql로 결과들고오기
//try-catch 문 들고오기
import { getReasonPhrase } from "http-status-codes";
import {pool} from "../../config/db.connect.js";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { insertReviewSql, insertMissionSql} from "./store.sql.js";

export const pushReview = async(data)=>{
    try{
        const conn = await pool.getConnection();
        const [confirm] = await pool.query(confirmReview ,[data.user_id, data.store_id]);
        if(confirm[0].isExistReview){
            conn.release();
            return -1;
        }
        const result = await pool.query(insertReviewSql, [data.user_id, data.store_id, data.article, data.score]);
        conn.release();
        return result[0].insertId;
    }catch(err){
        throw new BaseError(status.PARAMETER_IS_WORNG);
    } 
}
export const pushMission = async(data)=>{
    try{
        const conn = await pool.getConnection();
        const [confirm] = await pool.query(confirmReview ,[data.user_id, data.store_id]);
        if(confirm[0].isExistReview){
            conn.release();
            return -1;
        }
        const result = await pool.query(insertMissionSql, [data.store_id, data.reward, data.mission_spec]);
        conn.release();
        return result[0].insertId;
    }catch(err){
        throw new BaseError(status.PARAMETER_IS_WORNG);
    }
}
export const getReview = async(reviewId)=>{
   try{
        const conn = await pool.getConnection();
        const [review] = await pool.query(getReviewId,reviewId);
        console.log(review);
        if (review.length == 0){
            return -1;
        }
        conn.release();
        return review;

   }catch(err){
        throw new BaseError(status.PARAMETER_IS_WORNG);

   }
}
export const getMission = async(missionId)=>{
    try{
        const conn = await pool.getConnection();
        const [mission] = await pool.query(getMissionId, missionId);
        console.log(mission);
        if(mission.length == 0){
            return -1 ;
        }
        conn.release();
        return mission;
    }catch(err){
        throw new BaseError(status.PARAMETER_IS_WORNG);
    }
}
// store.dao.js
// review
export const getPreviewReview = async (cursorId, size, storeId) => {
    try {
        const conn = await pool.getConnection();

        if(cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null){
            const [reviews] = await pool.query(getReviewByReviewIdAtFirst, [parseInt(storeId), parseInt(size)]);
            conn.release();
            return reviews;
    
        }else{
            const [reviews] = await pool.query(getReviewByReviewId, [parseInt(storeId), parseInt(cursorId), parseInt(size)]);
            conn.release();
            return reviews;    
        }
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}
//미션완료
export const getCompleteMission = async(cursorId, size, storeId)=>{
    try {   
        const conn = await pool.getConnection();
        if(cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null){
            const[missions] = await pool.query(getMissionByCompletedAtFirst, [parseInt(storeId), parseInt(size)]);
            conn.release();
            return missions;
        }
        else{
            const [missions] = await pool.query(getMissionByCompletedMissionId, [parseInt(storeId), parseInt(cursorId), parseInt(size)]);
            conn.release();
            return missions;
        }
    }catch(err){
        throw new BaseError(status.PARAMETER_IS_WORNG);
    }
}