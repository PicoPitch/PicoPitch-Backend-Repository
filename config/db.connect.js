import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();


export const pool = mysql.createPool({
    host: process.env.DB_HOST || 'picopitchdb.cv6qca0emtk1.ap-northeast-2.rds.amazonaws.com',
    user: process.env.DB_USER || 'root',
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_TABLE || 'picodb',
    password: process.env.DB_PASSWORD || 'picopitch1234',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 60000
});

console.log('Database pool created : ', pool);