import pool from '../../config/db.connect.js';

const getUserById = async (kakaoId) => {
    const [rows] = await pool.query(`
        SELECT user_id
        FROM Users
        WHERE user_id=?`
        , [kakaoId]
    );
    return rows;
}

const signUp = async (email, kakaoId) => {
    await pool.query(`
        INSERT INTO Users(
            user_id,
            user_email
        ) VALUES (?, ?)`
        , [kakaoId, email]
    );
}

const userDao = {
    getUserById,
    signUp
};

export { userDao };

