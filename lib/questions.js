const optionsMenu = [
  {
    name: 'options',
    message: 'Welcome operator!  What would you like to do today?',
    type: 'list',
    choices: [
      'View all departments.',
      'View all roles.',
      'View all employees.',
      'Add a department.',
      'Add a role.',
      'Add an employee.',
      'Update role.',
      'Exit.',
    ]
  }
];

const addDepartment = [
  {
    name: 'name',
    type: 'input',
    message: 'What is the departments name?'
  },
];

const addRole = [
  {
    name: 'title',
    type: 'input',
    message: 'What is the role title?',
  },
  {
    name: 'salary',
    type: 'number',
    message: 'What is the salary of this role?',
  },
  {
    name: 'deptId',
    type: 'number',
    message: 'What is the id of the department the role belongs to?',
  },
];

const addEmployee = [
  {
    name: 'first_name',
    type: 'input',
    message: 'Please enter the employees first name.',
  },
  {
    name: 'last_name',
    type: 'input',
    message: 'Please enter the employees last name.',
  },
  {
    name: 'role_id',
    type: 'number',
    message: 'Please enter the id of the role you associated with this employee.',
  },
  {
    name: 'manager_id',
    type: 'number',
    message: 'Please enter the id of the manager associated with this employee.',
  },
]

module.exports = { optionsMenu, addDepartment, addRole, addEmployee };