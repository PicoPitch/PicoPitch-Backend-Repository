import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const sequelize = new Sequelize('picodb', 'root', process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql', // or 'postgres', 'sqlite', 'mssql', etc.
    logging: false
});

export default sequelize;