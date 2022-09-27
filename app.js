const inquirer = require('inquirer');
const db = require('./lib/dbConn');
const questions = require('./lib/questions');


//make a IIFE, so it doesn't pollute the namespace.
(function optionsMenu() {
  return inquirer.prompt(questions.optionsMenu).then((answers) => {
    if (answers.options === 'Exit.') {
      process.exit();
    } else if (answers.options === 'View all employees.') {
      db.query('SELECT * FROM employee', '', (err, employees) => {
        if (!err) {
          console.log('Congratulations, you have successfully selected view all employees!')
            console.table(employees);
          return optionsMenu();
        } else console.log(err)
      })
    } else if (answers.options === 'View all departments.') {
      db.query('SELECT * FROM department', '', (err, departments) => {
        if (!err) {
          console.log('You have selected all departments yay!  Thank you for your selection, please view below!');
          console.table(departments)
        } else {
          console.log(err);
          process.exit(1)
      }
      })
      return optionsMenu();
    } else if (answers.options === 'View all roles.') {
      db.query('SELECT * FROM role', '',
        (err, roles) => {
        if(!err) {
          console.log('You have selected to view all roles, please enjoy your response.');
          console.table(roles);
        } else {
          console.log(err);
          process.exit(1);
        }

      })
      return optionsMenu()
    } else if (answers.options === 'Add a department.') {
      inquirer.prompt(questions.addDepartment).then((answers) => {
        db.query('INSERT INTO department (name) VALUES (?)', answers.name,
          (err, data) => {
          if (err) {
            console.log(err);
            process.exit(1)
          } else {
            return optionsMenu();
          }
        });
      })
    } else if (answers.options === 'Add a role.') {
      inquirer.prompt(questions.addRole).then((answers) => {
        db.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)',
          [answers.title, answers.salary, answers.deptId],
          (err, data)=> {
          if (err) {
            console.log(err);
            process.exit(0);
          } else {
            return optionsMenu();
          }
        })
      })
    } else if (answers.options === 'Add an employee.') {
      inquirer.prompt(questions.addEmployee).then( (answers) => {
        db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
          [answers.first_name, answers.last_name, answers.role_id, answers.manager_id],
          (err, result) => {
          if (err) {
            console.log(err);
            process.exit(1);
          } else {
            return optionsMenu();
          }
          })
      })
    }

      })
    })
();


