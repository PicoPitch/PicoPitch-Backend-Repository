import { deleteByCompositeKey } from '../keywords/keywords.repository.js';

export const deleteKeywordByCompositeKey = async (user_id, ppt_id, script_id) => {
    return await deleteByCompositeKey(user_id, ppt_id, script_id);
};
