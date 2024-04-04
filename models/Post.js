// models/post.js
module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        }
      },
    });
  
    Post.associate = (models) => {
      Post.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
      Post.hasMany(models.Comment, {
        foreignKey: 'postId',
        as: 'comments',
      });
    };
  
    return Post;
  };
  