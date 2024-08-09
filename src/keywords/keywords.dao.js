import pool from '../../config/db.connect.js';

export const deleteKeyword = async (user_id, ppt_id, script_id) => {
    const db = await pool.dbConnection();
    const [result] = await db.execute(
        'DELETE FROM keywords WHERE user_id = ? AND ppt_id = ? AND script_id = ?',
        [user_id, ppt_id, script_id]
    );
    return result;
};

export const insertNewKeyword = async (user_id, ppt_id, script_id, keyword) => {
    const db = await dbConnection();
    const [result] = await db.execute(
        'INSERT INTO keywords (user_id, ppt_id, script_id, keyword) VALUES (?, ?, ?, ?)',
        [user_id, ppt_id, script_id, keyword]
    );
    return result;
};

export const updateKeywordData = async (user_id, ppt_id, script_id, keyword) => {
    const db = await dbConnection();
    const [result] = await db.execute(
        'UPDATE keywords SET keyword = ? WHERE user_id = ? AND ppt_id = ? AND script_id = ?',
        [keyword, user_id, ppt_id, script_id]
    );
    return result;
};