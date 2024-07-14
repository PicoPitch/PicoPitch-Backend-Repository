/**
 * 
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import {signinResponseDTO} from "../dtos/user.dto.js"
import {addUser, getUser, getPreferToUserID, setPrefer} from "../models/user.dao.js"

export const joinUser = async (body)=>{
    const birth =new Date (body.birthYear, body.birthMonth, body.birthDay);
    const prefer = body.prefer;

    const  joinUserDate = await addUser({
        'email' : body.email,
        'name' : body.name,
        'gender' : body.gender,
        'birth' : body.birth,
        'addr': body.addr,
        'specAddr' : body.specAddr,
        'phone' : body.phone
    });
    if(joinUserDate == -1){
        throw new  BaseError(status.EMAIL_ALREADY_EXIST);
    }else{
        for(let i =0 ; i < prefer.length; i++){
            await setPrefer(joinUserDate, prefer[i]);
        }
        return signinResponseDTO(await getUser(joinUserDate), await getPreferToUserID(joinUserData));
    }
}
 */
//#1 리뷰추가 :
//dto,dao 연결

import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import {reviewResponseDTO, missionResponseDTO} from  "../dtos/store.response.dto.js";
import {pushReview, pushMission, getReview, getMission} from "../models/store.dao.js"
//controller 연결
export const joinReview = async(body, storeId)=>{
//body라는 하나의 객체로서 전달함, 특정 가게에 대한 것이므로
    const reviewData = await pushReview({
        'user_id' : body.user_id,
        'store_id' : storeId,
        'article' : body.article,
        'score' : body.score  
    });
    if(reviewData == -1){
        throw new BaseError(status.REVIEW_ALREADY_EXIST);
    }else{
        return reviewResponseDTO(await getReview(reviewData));
    }
}
//#2 미션추가 :
export const joinMission = async(body,storeId)=>{
    const missionData = await pushMission({
        'storeId' : storeId,
        'reward' : body.reward,
        'mission_spec' : body.mission_spec
    });
    if(missionData == -1){
        throw new BaseError(status.MISSION_ALREADY_EXIST);
    }else{
        return missionResponseDTO(await getMission(missionData));
    }
}