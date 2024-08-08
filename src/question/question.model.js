import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.connect.js';

const Question = sequelize.define('Question', {
  question_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', 
      key: 'user_id'
    }
  },
  ppt_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Ppts', 
      key: 'ppt_id'
    }
  },
  script_id: {
    type: DataTypes.INTEGER,
    allowNull: true, // script_id가 선택적일 경우
    references: {
      model: 'Scripts', 
      key: 'script_id'
    }
  },
  question: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  answer: {
    type: DataTypes.TEXT,
    allowNull: true // 답변은 선택적일 경우
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW
  }
}, {
  tableName: 'ExpectedQuestions', 
  timestamps: false // created_at과 updated_at을 직접 관리하는 경우
});

export default Question;
