const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

const mysqlHost = process.env.MYSQL_HOST || 'localhost';
const mysqlPort = process.env.MYSQL_PORT || '3306';
const mysqlUser = process.env.MYSQL_USER || 'root';
const mysqlDatabase = process.env.MYSQL_SCHEMA || 'employees';

const conn = mysql.createConnection(
  {
      host: mysqlHost,
      port: mysqlPort,
      user: mysqlUser,
      password: process.env.MYSQL_PW,
      database: mysqlDatabase
  },
  console.log(`Connected to MySQL on ${mysqlHost} port ${mysqlPort} user ${mysqlUser} using database ${mysqlDatabase}.`)
)