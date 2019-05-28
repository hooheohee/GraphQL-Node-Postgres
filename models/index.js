import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  '<Postgres URL>'
);

const db = {
  User: sequelize.import('./user'),
};


db.sequelize = sequelize;
// db.Sequelize = Sequelize;

export default db;
