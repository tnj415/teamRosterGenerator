const inquirer = require('inquirer');
const fs = require('fs');

let generateHTML = (data) =>
  `uio`;


do {
  inquirer
    .prompt([
      {
        'type': 'list',
        'name': 'person',
        'message': 'Add to Roster:',
        'choices': ['Manager', 'Engineer', 'Intern']
      },
      {
        'type': 'input',
        'name': 'fullName',
        'message': 'Enter Full Name:'
      },
      {
        'type': 'input',
        'name': 'idNum',
        'message': 'Enter ID Number:'
      },
      {
        'type': 'input',
        'name': 'eMail',
        'message': 'Enter Email:'
      }
    ])
    .then((data) => {
      const htmlPageContent = generateHTML(data);

      switch (data.person) {
        case 'Manager': data.push(addManager());
          var manObj = new Manager({ fullName, idNum, eMail, officeID })
          break;
        case 'Engingeer': data.push(addEngineer());
          var engObj = new Engineer({ fullName, idNum, eMail, githubUsername })
          break;
        case 'Intern': data.push(addIntern());
          var intObj = new Intern({ fullName, idNum, eMail, })
          break;
        default: alert("Error in Switch Statement: " + data.person);
          break;
      }

      fsPromises.appendFile('/lib/classes.js', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
      );
    });
} while (!addMember())

let addManager = (detail) => inquirer.prompt([
  {
    'type': 'input',
    'name': 'officeNum',
    'message': 'Enter Office Number:'
  },
]).then((detail => { return detail; }))


let addEngineer = (detail) => inquirer.prompt([
  {
    'type': 'input',
    'name': 'githubUsername',
    'message': 'Enter Github Username:'
  },
]).then((detail => { return detail; }))


let addIntern = (detail) => inquirer.prompt([
  {
    'type': 'input',
    'name': 'school',
    'message': 'Enter School:'
  },
]).then((detail => { return detail; }))

let addMember = (addData) => inquirer.prompt([
  {
    'type': 'confirm',
    'name': 'continue',
    'message': 'Add Another Team Member?'
  }
]).then((addData => { return addData.continue; }))