/**
 * 보내준 데이터를 가지고 요청한 값을 전달
 * 사용자 고려 -> 선호음식 카테고리 맵핑-> 제대로 되었음을 전달
 * daseerror : status.Email_already_exist
 **/
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