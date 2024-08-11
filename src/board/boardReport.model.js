import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.connect.js';

const BoardReport = sequelize.define('Board_Report',{
    report_id :{
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
    },
    reasons :{
        type : DataTypes.TEXT,
        allowNull : false
    }
    },{
        tableName : 'Board_Report',
        timestamps : false
    });

    export default BoardReport ;