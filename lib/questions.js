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

module.exports = { optionsMenu };