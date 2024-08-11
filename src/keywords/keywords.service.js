import { deleteByCompositeKey, insertKeyword, modifyKeyword } from '../keywords/keywords.repository.js';

export const deleteKeywordByCompositeKey = async (user_id, ppt_id, script_id) => {
    return await deleteByCompositeKey(user_id, ppt_id, script_id);
};

export const addNewKeyword = async (user_id, ppt_id, script_id, keyword) => {

    console.log("addNewKeyword입니다 여기");
    return await insertKeyword(user_id, ppt_id, script_id, keyword);
};

export const updateExistingKeyword = async (user_id, ppt_id, script_id, keyword) => {
    return await modifyKeyword(user_id, ppt_id, script_id, keyword);
};
