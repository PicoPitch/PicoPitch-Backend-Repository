import dbConnection from '../../config/db.connect.js';

export const deleteKeyword = async (user_id, ppt_id, script_id) => {
    const db = await dbConnection();
    const [result] = await db.execute(
        'DELETE FROM keywords WHERE user_id = ? AND ppt_id = ? AND script_id = ?',
        [user_id, ppt_id, script_id]
    );
    return result;
};
