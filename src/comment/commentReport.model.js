import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db.connect.js'

export const CommentReport = sequelize.define('CommentReport', {
  report_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  comment_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'Comments',
      key: 'comment_id',
    },
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'user_id',
    },
  },
  reason: {
    type: DataTypes.ENUM('유해 정보 포함', '욕설 및 비방', '악성 댓글'),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'CommentReports',
  timestamps: false,
});
