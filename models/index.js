import Sequelize from "sequelize";
import dbconfig from "../dbconfig";

const sequelize = new Sequelize("db name", "username", "password", {
	// db config object
	// use config file
});

const db = {
  User: sequelize.import("./user")
};

db.sequelize = sequelize;

export default db;
