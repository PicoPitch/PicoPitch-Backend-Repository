import {DataType} from sequelize;
import sequelize from '../../config/db.connect.js';

const BoardLike = sequelize.define('BoardLikes',{
    like_id :{
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
    }
    },{
        tableName : 'BoardLikes',
        timestamps : false
    });

    export default BoardLike ;
