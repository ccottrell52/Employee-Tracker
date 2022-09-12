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

function mainMenu() {
    const questions = [
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          { name: "View All Employees", value: "Selection1" },
          { name: "Add Employee", value: "Selection2" },
          { name: "Update Employee Role", value: "Selection3" },
          { name: "View All Roles", value: "Selection4" },
          { name: "Add Role", value: "Selection5" },
          { name: "View All Departments", value: "Selection6" },
          { name: "Add Department", value: "Selection7" },
          { name: "Quit", value: "Selection8" },
  
        ]
      }
    ]};