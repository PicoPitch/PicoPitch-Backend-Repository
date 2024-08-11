import { pool } from '../../config/db.connect.js';


export const deleteKeyword = async (user_id, ppt_id, script_id) => {
    const db = await pool.getConnection();
    const [result] = await db.execute(
        'DELETE FROM keywords WHERE user_id = ? AND ppt_id = ? AND script_id = ?',
        [user_id, ppt_id, script_id]
    );
    return result;
};

export const insertNewKeyword = async (user_id, ppt_id, script_id, keyword) => {
    const db = await pool.getConnection();

    try {
        const [result] = await db.query(
            'INSERT INTO Keywords (user_id, ppt_id, script_id, keyword) VALUES (?, ?, ?, ?)',
            [user_id, ppt_id, script_id, keyword]
        );
        return result;
    } catch (error) {
        console.error('Error inserting keyword:', error);
        throw error; // 에러를 다시 던져 호출한 곳에서 처리할 수 있도록 합니다.
    } finally {
        db.release();
    }
    eo

};

export const updateKeywordData = async (user_id, ppt_id, script_id, keyword) => {
    const db = await dbConnection();
    const [result] = await db.execute(
        'UPDATE keywords SET keyword = ? WHERE user_id = ? AND ppt_id = ? AND script_id = ?',
        [keyword, user_id, ppt_id, script_id]
    );
    return result;
};