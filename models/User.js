// models/user.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      index: true // Index added to lastName column
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    phoneNumber: {
      type: DataTypes.STRING, // Assuming phoneNumber is a string
      allowNull: false,
      defaultValue: '0123456789' // Default value for existing records
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Post, {
      foreignKey: 'userId',
      as: 'posts',
    });

    User.hasMany(models.Comment, {
      foreignKey: 'userId',
      as: 'comments',
    });
  };

  return User;
};
