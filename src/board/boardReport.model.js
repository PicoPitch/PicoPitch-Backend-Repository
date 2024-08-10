import {DataType} from sequelize;
import sequelize from '../../config/db.connect.js';

const BoardLike = sequelize.define('BoardLikes',{
    report_id :{
        type : DataType.BIGINT,
        primaryKey : true,
        autoIncrement : true
    },
    user_id :{
        type : DataType.BIGINT,
        allowNull : false
    },
    board_id :{
        type : DataType.BIGINT,
        allowNull : false
    },
    reasons :{
        type : DataType.INTEGER, //enum 이지 않을까.
        allowNull : false
    }
    },{
        tableName : 'BoardLikes',
        timestamps : false
    });

    export default BoardLike ;
