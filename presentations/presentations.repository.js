// repositories/presentationRepository.js
import pool from '../config/db.connect.js';

export const getPresentationsList = async (userId, order) => {
    try {
        let orderBy = 'updated_date';

        if (order == 'upcoming') {
            orderBy = 'presentation_date';
        }

        //          특정 유저 ID의 프레젠테이션을 recent 순으로 정렬: http://localhost:8080/presentations/user/1?order=recent
        //          특정 유저 ID의 프레젠테이션을 presentation_date 순으로 정렬: http://localhost:8080/presentations/user/1?order=upcoming

        const query = `SELECT * FROM PPTs WHERE user_id = ? ORDER BY ${orderBy} DESC`;
        const [results] = await pool.query(query, [userId]); // userId를 쿼리에 바인딩
        return results;
    } catch (error) {
        console.error('Query error:', error);
        throw error; // 에러를 던져 상위 호출 스택으로 전달
    }
};
