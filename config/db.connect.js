// config/db.connect.js
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME || 'picopitch',  // 데이터베이스 이름
    process.env.DB_USER || 'root',  // 사용자 이름
    process.env.DB_PASSWORD || '',  // 비밀번호
    {
        host: process.env.DB_HOST || 'localhost',  // 호스트
        dialect: 'mysql',  // 데이터베이스 종류
        logging: false,  // SQL 쿼리 로그 출력 여부
    }
);

export default sequelize;
