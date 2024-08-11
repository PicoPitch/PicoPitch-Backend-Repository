import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.connect.js';

const CommentReport = sequelize.define('CommentReport', {
  report_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  comment_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  reason: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'Comment_Report',
  timestamps: false,
});

export default CommentReport;
