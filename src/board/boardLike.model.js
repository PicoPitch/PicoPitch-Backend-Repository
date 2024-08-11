import {DataTypes} from 'sequelize';
import sequelize from '../../config/db.connect.js';

const BoardLikes = sequelize.define('Board_Likes',{
    like_id :{
        type : DataTypes.BIGINT,
        primaryKey : true,
        autoIncrement : true
    },
    user_id :{
        type : DataTypes.BIGINT,
        allowNull : false
    },
    board_id :{
        type : DataTypes.BIGINT,
        allowNull : false
    }
    },{
        tableName : 'Board_Likes',
        timestamps : false
    });

    export default BoardLikes ;
