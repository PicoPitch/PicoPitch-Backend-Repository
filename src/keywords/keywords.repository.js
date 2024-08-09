import { deleteKeyword, insertNewKeyword, updateKeywordData } from '../keywords/keywords.dao.js';

export const deleteByCompositeKey = async (user_id, ppt_id, script_id) => {
    return await deleteKeyword(user_id, ppt_id, script_id);
};

export const insertKeyword = async (user_id, ppt_id, script_id, keyword) => {
    console.log("insertKeyword입니다 여기 레포지토리");
    return await insertNewKeyword(user_id, ppt_id, script_id, keyword);
};

export const modifyKeyword = async (user_id, ppt_id, script_id, keyword) => {
    return await updateKeywordData(user_id, ppt_id, script_id, keyword);
};
