import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db.connect.js'
//근데 사용자 받아오고 할라면 user 도메인이랑 연동?이 돼야해서 회의하면서 얘기해봐야할 것 같습니다
export const Comment = sequelize.define('Comment', {
  comment_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  board_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  parent_comment_id: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
}, {
  tableName: 'Comments',
  timestamps: false,
});
