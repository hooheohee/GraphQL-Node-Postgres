import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://dczzpyzf:cCC9QylT9kO6Afmgcg0Ie_xEnEedM4WE@isilo.db.elephantsql.com:5432/dczzpyzf"
);

const db = {
  User: sequelize.import("./user")
};

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

export default db;
