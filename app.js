const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Inquirer question functions
const getEmployeeCount = () => {
  const starterQuestions = [
    {
      type: 'input',
      name: 'managerNum',
      message: 'How many managers do you have on your team?',
      prefix: 'Hi! Welcome to your Employee Team HTML generator.\nLets get started!\n'
    },
    {
      type: 'input',
      name: 'engineerNum',
      message: 'How many engineers do you have on your team?'
    },
    {
      type: 'input',
      name: 'internNum',
      message: 'How many interns do you have on your team?'
    }
  ];
  return inquirer.prompt(starterQuestions);
}

const getManagers = (num) => {
  const totalQuestions = [];
  for (let i = 0; i < num; i++) {
    const managerQuestions = [
      {
        type: 'input',
        name: 'managerName' + i,
        message: 'Please provide a manager\'s name',
      },
      {
        type: 'input',
        name: 'managerID' + i,
        message: 'What is the manager\'s ID#?'
      },
      {
        type: 'input',
        name: 'managerEmail' + i,
        message: 'What is the manager\'s email address?'
      },
      {
        type: 'input',
        name: 'managerOfficeNumber' + i,
        message: 'What is the manager\'s office number?'
      }
    ];
  
    totalQuestions.push(managerQuestions[0], managerQuestions[1], managerQuestions[2], managerQuestions[3]);
  }
  return inquirer.prompt(totalQuestions);
}

const getEngineers = (num) => {
  const totalQuestions = [];
  for (let i = 0; i < num; i++) {
    const engineerQuestions = [
      {
        type: 'input',
        name: 'engineerName' + i,
        message: 'Please provide an engineer\'s name',
      },
      {
        type: 'input',
        name: 'engineerID' + i,
        message: 'What is the engineer\'s ID#?'
      },
      {
        type: 'input',
        name: 'engineerEmail' + i,
        message: 'What is the engineer\'s email address?'
      },
      {
        type: 'input',
        name: 'engineerGithub' + i,
        message: 'What is the engineer\'s Github profile?'
      }
    ];
  
    totalQuestions.push(engineerQuestions[0], engineerQuestions[1], engineerQuestions[2], engineerQuestions[3]);
  }
  return inquirer.prompt(totalQuestions);
}

const getInterns = (num) => {
  const totalQuestions = [];
  for (let i = 0; i < num; i++) {
    const internQuestions = [
      {
        type: 'input',
        name: 'internName' + i,
        message: 'Please provide an intern\'s name',
      },
      {
        type: 'input',
        name: 'internID' + i,
        message: 'What is the intern\'s ID#?'
      },
      {
        type: 'input',
        name: 'internEmail' + i,
        message: 'What is the intern\'s email address?'
      },
      {
        type: 'input',
        name: 'internSchool' + i,
        message: 'What is the intern\'s school?'
      }
    ];
  
    totalQuestions.push(internQuestions[0], internQuestions[1], internQuestions[2], internQuestions[3]);
  }
  return inquirer.prompt(totalQuestions);
}

// function to initialize program
const init = async () => {
  try {
    const counts = await getEmployeeCount();
    const { managerNum, engineerNum, internNum } = counts;

    const employees = [];

    if(managerNum > 0) {
      const managers = await getManagers(managerNum);
      for (let i = 0; i < managerNum; i++) {
        employees.push(new Manager(managers['managerName' + i], managers['managerID' + i], managers['managerEmail' + i], managers['managerOfficeNumber' + i]));
      }
    }
    
    if(engineerNum > 0) {
      const engineers = await getEngineers(engineerNum);
      for (let i = 0; i < engineerNum; i++) {
        employees.push(new Engineer(engineers['engineerName' + i], engineers['engineerID' + i], engineers['engineerEmail' + i], engineers['engineerGithub' + i]));
      }
    }
    
    if(internNum > 0) {
      const interns = await getInterns(internNum);
      for (let i = 0; i < internNum; i++) {
        employees.push(new Intern(interns['internName' + i], interns['internID' + i], interns['internEmail' + i], interns['internSchool' + i]));
      }
    }

    console.log(employees);
    // Render
    const renderedHTML = render(employees);

  } catch(err) {
    console.log(err);
  }
  
}

// function call to initialize program
init();

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
