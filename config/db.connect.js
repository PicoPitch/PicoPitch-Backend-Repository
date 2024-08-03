import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); // 환경 변수를 로드

// 연결 풀 생성
const pool = mysql.createPool({
    host: process.env.DB_HOST,  // .env에서 DB_HOST를 가져옴
    user: process.env.DB_USER,       // .env에서 DB_USER를 가져옴
    port: process.env.DB_PORT,         // .env에서 DB_PORT를 가져옴
    database: process.env.DB_TABLE,  // .env에서 DB_TABLE를 가져옴
    password: process.env.DB_PASSWORD,   // .env에서 DB_PASSWORD를 가져옴
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export default pool; // pool을 named export로 내보냄
