const Employee = require("./Employee");

class Intern extends Employee {
  constructor(school) {
    if(!school) {
      throw new Error("You are missing the school!");
    }

    this.school = school;
    super(name, id, email);
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern';
  }
}

module.exports = Intern;
