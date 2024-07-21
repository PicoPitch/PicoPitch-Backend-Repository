import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();
export const pool = mysql .createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_TABEL || 'umc_study9',
    password: process.env.DB_PASSWORD || '800805',
    //waitForConnection: true,
    connectionLimit : 10,
    queueLimit: 0,
});
//dotenv : 환경변수 라이브러리