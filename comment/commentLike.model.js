import { DataTypes } from 'sequelize';
import { sequelize } from '../database';
import { Comment } from './comment.model.js';
import { User } from './user.model.js'; // 사용자 모델이 필요할 수 있습니다.

export const CommentLike = sequelize.define('CommentLike', {
  C_like_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  comment_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: Comment,
      key: 'comment_id',
    },
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: User, //유저 
      key: 'user_id',
    },
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'CommentLikes',
  timestamps: false,
});

// Define the unique constraint on comment_id and user_id to prevent multiple likes
CommentLike.sync().then(() => {
  return CommentLike.addIndex(['comment_id', 'user_id'], {
    unique: true,
  });
});
