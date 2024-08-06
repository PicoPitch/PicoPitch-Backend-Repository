// src/user/user.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.connect.js'; // default export로 sequelize 가져오기

// User 모델 정의
const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Users',
  timestamps: false,
});

export default User;
