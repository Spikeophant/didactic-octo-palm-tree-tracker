const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./lib/dbConn');
const questions = require('./lib/questions');


//make a IIFE so it doesn't pollute the namespace.
(function optionsMenu() {
  return inquirer.prompt(questions.optionsMenu).then((answers) => {
    if (answers.options === 'Exit.') {
      process.exit();
    } else if (answers.options === 'View all employees.') {
      db.query('SELECT * FROM employee', '', (err, employees) => {
        if (!err) {
          console.log('Congratulations, you have successfully selected view all employees!')
          for (const employee of employees) {
            console.log(`Employee identifier: ${employee.id}
Employee first name: ${employee.first_name}
Employee last name: ${employee.last_name}
Employee role identifier: ${employee.role_id}
Managerial reporting identifier: ${employee.manager_id}`);
          }
          return optionsMenu();
        } else console.log(err)
      })
    } else if (answers.options === 'View all departments.') {
            console.log('You have selected all departments yay!  Thank you for your selection, please view below!')
      console.log('We should probably implement the customers requests.')
      return optionsMenu();
          }

      })
    })();


