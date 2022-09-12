const mysql = require('mysql2');
const inquirer = require('inquirer')
require('console.table');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Bigboy18!',
    database: 'employees_db'
  },
  mainMenu()
);