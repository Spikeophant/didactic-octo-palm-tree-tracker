const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

const conn = mysql.createConnection(
  {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PW,
    table: 'employees'
  },
  console.log('Connecting to MySQL on localhost port 3306 user root.')
)