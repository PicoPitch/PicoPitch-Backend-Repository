import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.connect.js';

const CommentLike = sequelize.define('CommentLike', {
  C_like_id: {
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
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'Comment_Likes',
  timestamps: false,
});

export default CommentLike;
