const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    if(!github) {
      throw new Error("You are missing the github username!");
    }
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;
