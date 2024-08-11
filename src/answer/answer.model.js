import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.connect.js';

const ExpectedQuestion = sequelize.define('ExpectedQuestion', {
  question_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  answer: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'ExpectedQuestions',
  timestamps: false,
});

export default ExpectedQuestion;
