// repositories/presentationRepository.js
import pool from '../config/db.connect.js';

export const getPresentationsList = async (userId, order) => {
    try {
        let orderBy = 'updated_date';

        if (order == 'upcoming') {
            orderBy = 'presentation_date';
        }

        const query = `SELECT * FROM PPTs WHERE user_id = ? ORDER BY ${orderBy} DESC`;
        const [results] = await pool.query(query, [userId]); // userId를 쿼리에 바인딩
        return results;
    } catch (error) {
        console.error('Query error:', error);
        throw error; // 에러를 던져 상위 호출 스택으로 전달
    }
};

export const deletePresentation = async (pptId) => {
    try {
        const query = 'DELETE FROM PPTs WHERE ppt_id = ?';
        await pool.query(query, [pptId]);
    } catch (error) {
        console.error('Query error:', error);
        throw error;
    }
};
