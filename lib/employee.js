const db = require('./dbConn');

class Employee {
  constructor() {};

  createEmployee(fName, lName, email, role, manager = null) {

    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.role = db.query('SELECT id FROM role WHERE title = ?', [role]);
    this.managerId = async () => { await db.query('SELECT manager_id FROM employee WHERE first_name = ?', ['Gordon'], (err, result) => {
      if (err !== null) {
        return err;
      } else {
        console.log(result);
        return result;
      }
    })}

  }

  getFirstName() {
    return this.fName;
  }

  getLastName() {
    return this.lName;
  }

  getId() {
   return this.empId
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