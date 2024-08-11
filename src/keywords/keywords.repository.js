import { deleteKeyword, insertNewKeyword, updateKeywordData } from '../keywords/keywords.dao.js';

export const deleteByCompositeKey = async (user_id, ppt_id, script_id, keyword) => {
    return await deleteKeyword(user_id, ppt_id, script_id, keyword);
};

export const insertKeyword = async (user_id, ppt_id, script_id, keyword) => {
    return await insertNewKeyword(user_id, ppt_id, script_id, keyword);
};

export const modifyKeyword = async (user_id, ppt_id, script_id, keyword) => {
    return await updateKeywordData(user_id, ppt_id, script_id, keyword);
};
