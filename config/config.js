require("dotenv").config();
module.exports = {
  development: {
    username: "root", //process.env.MYSQL_LOCAL_USERNAME,
    password: "123", //process.env.MYSQL_LOCAL_PASSWORD,
    database: "surf", //process.env.MYSQL_LOCAL_DATABASE,
    host: process.env.MYSQL_LOCAL_HOST,
    port: process.env.MYSQL_LOCAL_PORT,
    dialect: "mysql",
    operatorsAliases: 0,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: "mysql",
  },
};
