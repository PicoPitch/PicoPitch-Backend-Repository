// repositories/presentationRepository.js
import pool from '../config/db.connect.js';

export const getPresentationsList = async (order) => {
    try {
        let orderBy = 'updated_date';

        if (order == 'upcoming') {
            orderBy = 'presentation_date';
        }

        // 도메인 http://localhost:8080/presentations?order=upcoming

        const query = `SELECT * FROM PPTs ORDER BY ${orderBy} DESC`;
        const [results] = await pool.query(query); // async/await 사용
        return results;
    } catch (error) {
        console.error('Query error:', error);
        throw error; // 에러를 던져 상위 호출 스택으로 전달
    }
};
