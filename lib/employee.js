const db = require('./dbConn');

class Employee {
  constructor(fName, lName, email, role, manager = null) {
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.role = db.query('SELECT id FROM role WHERE title = ?', role);
    this.managerId = db.query('SELECT manager_id FROM employees WHERE first_name = ?', manager);
  }

  getFirstName() {
    return this.fName;
  }

  getLastName() {
    return this.lName;
  }

  getId() {
    return 'query needs to be created.';
  }

  getEmail() {
    return this.email;
  }

  getRoleId() {
    return this.role;
  }

  getManagerId() {
    return this.managerId;
  }

}

module.exports = Employee;