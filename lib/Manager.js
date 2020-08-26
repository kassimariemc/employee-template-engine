const Employee = require("./Employee");

class Manager extends Employee {
  constructor(officeNumber) {
    if(!officeNumber) {
      throw new Error("You are missing the office number!");
    }

    this.officeNumber = officeNumber;
    super(name, id, email);
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;