const Employee = require('../lib/employee');

describe("employee object", () => {
  const employee = new Employee('FirstName', 'LastName', 'f.l@company.com', 'Software Engineer')

  it('Should create an employee with known inputs and return them.', () => {
    expect(typeof(employee)).toEqual('object')});
  it('Should return the employees First name', () => {
    expect(employee.getFirstName()).toEqual('FirstName')});
  it('Should return the employees Last name', () => {
    expect(employee.getLastName()).toEqual('LastName')});
  it('Should return the employees ID number', () => {
    expect(employee.getId()).toEqual(5)});
  it('Should return the employees email address', () => {
    expect(employee.getEmail().toEqual('f.l@company.com'))});
  it('Should return the employees role id', () => {
    expect(employee.getRoleId().toEqual(2))});
  it('Should return the employees manager ID.', () => {
    expect(employee.getManagerId()).toEqual(null)});
})