module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, { as: 'blogPosts', foreignKey: 'userId' })
  };

  return User;
};
