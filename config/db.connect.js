import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    database: process.env.DB_TABLE,
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 60000
});

const sequelize = new Sequelize('picodb', 'root', process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql', // or 'postgres', 'sqlite', 'mssql', etc.
    logging: false
});

export default sequelize;