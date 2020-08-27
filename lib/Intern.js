const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    if(!school) {
      throw new Error("You are missing the school!");
    }
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern';
  }
}

module.exports = Intern;
