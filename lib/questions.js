const optionsMenu = [
  {
    name: 'options',
    message: 'Welcome operator!  What would you like to do today?',
    type: 'list',
    choices: [
      {name: 'View all departments.', value: 1},
      {name: 'View all roles.',value: 2},
      {name: 'View all employees.',value: 3},
      {name: 'Add a department.', value: 4},
      {name: 'Add a role.', value: 5},
      {name: 'Add an employee.', value: 6},
      {name: 'Update employee Role.', value: 7},
      {name: 'Exit.', value: 0}
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

const updateEmployee = [
  {
    name: 'first_name',
    type: 'input',
    message: 'Please'
  }
]

module.exports = { optionsMenu, addDepartment, addRole, addEmployee };