import pool from '../../config/db.connect.js';

const getUserById = async (kakaoId) => {
    return await pool.query(`
    SELECT
        user_id
    FROM Users
    WHERE user_id=?`
        , [kakaoId]
    );
}

const signUp = async (email, kakaoId) => {
    return await pool.query(`
    INSERT INTO Users(
        user_id,
        user_email
    ) VALUES (?, ?)`
        , [kakaoId, email]
    );
}

export { getUserById, signUp };
