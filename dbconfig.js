module.exports = {
  db_name: "db name",
  dbconfig: {
    dialect: "mssql/postgres/mysql...",
    // port: 3306,
    dialectOptions: {
      authentication: {
        type: "ntlm",
        options: {
          domain: "domain name",
          userName: "username",
          password: "password"
        }
      },
      options: {
        instanceName: "instance name"
      }
    }
  }
};
