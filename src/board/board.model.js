import {DataType} from sequelize;
import sequelize from '../../config/db.connect.js';

const Board = sequelize.define('Board',{
    board_id :{
        type : DataType.BIGINT,
        primaryKey : true,
        autoIncrement : true,
    },
    user_id :{
        type : DataType.BIGINT,
        allowNull : false
    },
    title:{
        type : DataType.STRING,
        allowNull : false
    },
    content :{
        type : DataType.STRING,
        allowNull : false
    },
    updated_at :{
        type : DataType.DATE,
        allowNull : false,
        defaultValue : DataType.NOW
    },
    scrap_count : {
        type : DataType.INTEGER,
        allowNull : false,
        defaultValue: 0,
    },
    like_count :{
        type : DataType.INTEGER,
        allowNull : false,
        defaultValue: 0,
    },
    comment_count :{
        type : DataType.INTEGER,
        allowNull : false,
        defaultValue: 0,
    },
    created_at : { 
        type : DataType.DATE,
        allowNull : false,
        defaultValue : DataType.NOW
    },
    category :{
        type : DataType.ENUM('꿀팁, 자유 게시판'),
        allowNull : false
    }
    },{
        tableName : 'Boards',
        timestamps : false
    });

    export default Board ;