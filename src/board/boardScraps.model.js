import {DataTypes} from 'sequelize';
import sequelize from '../../config/db.connect.js';

const Scraps = sequelize.define('Scraps',{
    scrap_id :{
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
        tableName : 'Scraps',
        timestamps : false
    });

    export default Scraps ;
