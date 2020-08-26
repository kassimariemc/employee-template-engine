const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(github) {
    if(!github) {
      throw new Error("You are missing the github username!");
    }

    this.github = github;
    super(name, id, email);
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;
