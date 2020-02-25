export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: DataTypes.STRING
    },
    {
      // freezeTableName: true
      timestamps: false
    }
  );

  return User;
};
