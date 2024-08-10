import {DataType} from sequelize;
import sequelize from '../../config/db.connect.js';

const BoardScrap = sequelize.define('Scraps',{
    user_id :{
        type : DataType.BIGINT,
        allowNull : false
    },
    board_id :{
        type : DataType.BIGINT,
        allowNull : false
    }
    },{
        tableName : 'Scraps',
        timestamps : false,
        defaultValue : 0
    });

    export default BoardScrap ;
