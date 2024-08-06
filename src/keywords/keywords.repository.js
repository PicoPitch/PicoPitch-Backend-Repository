import { deleteKeyword } from '../keywords/keywords.dao.js';

export const deleteByCompositeKey = async (user_id, ppt_id, script_id) => {
    return await deleteKeyword(user_id, ppt_id, script_id);
};
