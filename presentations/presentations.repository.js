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

export const updatePresentationTitle = async (pptId, title) => {
    try {
        const query = 'UPDATE PPTs SET title = ? WHERE ppt_id = ?';
        await pool.query(query, [title, pptId]);
    } catch (error) {
        console.error('Query error:', error);
        throw error;
    }
};


export const createPresentation = async ({ filename, title, presentation_date, userId, keywords }) => {
    const connection = await pool.getConnection(); // 트랜잭션 시작
    try {
        await connection.beginTransaction();

        // 1. Insert presentation into PPTs table
        const [result] = await connection.query(
            `INSERT INTO PPTs (user_id, title, presentation_date, file_name) VALUES (?, ?, ?, ?)`,
            [userId, title, presentation_date, filename]
        );
        const pptId = result.insertId; // 생성된 프레젠테이션 ID

        // 2. Insert keywords and map them to the presentation
        for (const keyword of keywords) {
            // 2.1 Check if keyword already exists
            const [keywordResult] = await connection.query(
                `SELECT keyword_id FROM Keywords WHERE keyword = ?`,
                [keyword]
            );

            let keywordId;
            if (keywordResult.length > 0) {
                // Keyword already exists
                keywordId = keywordResult[0].keyword_id;
            } else {
                // Insert new keyword
                const [insertKeywordResult] = await connection.query(
                    `INSERT INTO Keywords (keyword) VALUES (?)`,
                    [keyword]
                );
                keywordId = insertKeywordResult.insertId;
            }

            // 2.2 Map keyword to presentation
            await connection.query(
                `INSERT INTO PPT_Keywords (ppt_id, keyword_id) VALUES (?, ?)`,
                [pptId, keywordId]
            );
        }

        await connection.commit(); // 트랜잭션 커밋
    } catch (error) {
        await connection.rollback(); // 트랜잭션 롤백
        console.error('Query error:', error);
        throw error;
    } finally {
        connection.release(); // 연결 해제
    }
};