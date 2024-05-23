module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Post",
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
    },
    meta_tags: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  });

  Comment.associate = (models) => {
    // Associate Comment with Post
    Comment.belongsTo(models.Post, {
      foreignKey: "postId",
      as: "post",
    });

    // Associate Comment with User
    Comment.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });
  };

  return Comment;
};
