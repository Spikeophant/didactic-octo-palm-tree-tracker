const inquirer = require('inquirer');
const db = require('./lib/dbConn');
const questions = require('./lib/questions');


//make a IIFE, so it doesn't pollute the namespace.
(function optionsMenu() {
  return inquirer.prompt(questions.optionsMenu).then((answers) => {
    if (answers.options === 0) {
      process.exit();
    } else if (answers.options === 3) {
      db.query('SELECT * FROM employee', '', (err, employees) => {
        if (!err) {
          console.log('Congratulations, you have successfully selected view all employees!')
            console.table(employees);
          return optionsMenu();
        } else console.log(err)
      })
    } else if (answers.options === 1) {
      db.query('SELECT * FROM department', '', (err, departments) => {
        if (!err) {
          console.log('You have selected all departments yay!  Thank you for your selection, please view below!');
          console.table(departments)
          return optionsMenu();
        } else {
          console.log(err);
          process.exit(1)
      }
      })
    } else if (answers.options === 2) {
      db.query('SELECT * FROM role', '',
        (err, roles) => {
        if(!err) {
          console.log('You have selected to view all roles, please enjoy your response.');
          console.table(roles);
          return optionsMenu();
        } else {
          console.log(err);
          process.exit(1);
        }

      })
    } else if (answers.options === 4) {
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
    } else if (answers.options === 5) {
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
    } else if (answers.options === 6) {
      inquirer.prompt(questions.addEmployee).then( (answers) => {
        db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
          [answers.first_name, answers.last_name, answers.role_id, answers.manager_id],
          (err) => {
          if (err) {
            console.log(err);
            process.exit(1);
          } else {
            return optionsMenu();
          }
          })
      })
    } else if (answers.options === 7) {
      let empId;
      let roleId;
      let emps = [];
      let roles = [];
      db.query('SELECT * FROM employee', (err, data) => {
        console.table(data);

        for (const i in data) {
           emps.push({
             name: `${data[i].first_name} ${data[i].last_name}`,
             value: [data[i].role_id, data[i].id],
           })

        }
        inquirer.prompt([{
          name: 'employeeId',
          type: 'list', choices: emps}]).then((answers) => {
          empId = answers.employeeId[1];
          console.log(answers.employeeId);
          db.query('SELECT * FROM role', (er, result) => {
            console.table(result);
              for (const i in result) {
                roles.push({
                  name: `${result[i].title} - ${result[i].salary}`,
                  value: result[i].id,
                })
              }
              inquirer.prompt([{
                name: 'roleId',
                type: 'list',
                choices: roles,
                message: 'Please select a role OPERATOR!'
              }]).then( (ans) => {
                console.log(ans)
                roleId = ans.roleId;
                console.log(empId, roleId)
                db.promise().query('UPDATE employee SET role_id = ? WHERE id = ?',
                  [roleId, empId]).then(() =>{return optionsMenu()})}
              )
          })
        });
      })
    }
  })
})
();


