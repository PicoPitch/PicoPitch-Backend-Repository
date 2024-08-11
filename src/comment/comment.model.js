import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.connect.js';

const Comment = sequelize.define('Comment', {
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

export default Comment;