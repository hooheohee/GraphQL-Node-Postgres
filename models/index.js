import Sequelize from "sequelize";

const sequelize = new Sequelize("postgres URL");

const db = {
  User: sequelize.import("./user")
};

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

export default db;
