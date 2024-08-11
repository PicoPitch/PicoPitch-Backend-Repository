import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.connect.js';

const Board = sequelize.define('Board',{
    board_id :{
        type : DataTypes.BIGINT,
        primaryKey : true,
        autoIncrement : true
    },
    user_id :{
        type : DataTypes.BIGINT,
        allowNull : false
    },
    title:{
        type : DataTypes.STRING,
        allowNull : false
    },
    content :{
        type : DataTypes.STRING,
        allowNull : false
    },
    updated_at :{
        type : DataTypes.DATE,
        allowNull : false,
        defaultValue : DataTypes.NOW
    },
    scrap_count : {
        type : DataTypes.INTEGER,
        allowNull : false,
        defaultValue: 0,
    },
    like_count :{
        type : DataTypes.INTEGER,
        allowNull : false,
        defaultValue: 0,
    },
    comment_count :{
        type : DataTypes.INTEGER,
        allowNull : false,
        defaultValue: 0,
    },
    created_at : { 
        type : DataTypes.DATE,
        allowNull : false,
        defaultValue : DataTypes.NOW
    },
    category :{
        type : DataTypes.ENUM('꿀팁, 자유 게시판'),
        allowNull : false
    }
    },{
        tableName : 'Boards',
        timestamps : false
    });

    export default Board ;