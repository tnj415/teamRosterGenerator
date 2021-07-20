const inquirer = require('inquirer');
const Member = require('./lib/member');
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require('fs');

const teamRoster = [];
const rosterId = [];

createTeam();

function createTeam() {

  console.log(addManager());

  //constructManager(addManager());
  console.log(constructManager(addManager()));


  do {
    buildTeam();

  } while (addMembers())

  //use created array to make html
}

function addMembers() {

  inquire.prompt([{
    type: 'confirm',
    name: 'continueBuilding',
    message: 'Continue Building Team?',
  }
  ]).then((data) => {
    return data;
  })
}

function buildTeam() {

  inquirer.prompt([
    {
      type: 'list',
      name: 'person',
      message: 'Add to Roster:',
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'fullName',
      message: 'Enter Full Name:'
    },
    {
      type: 'input',
      name: 'idNum',
      message: 'Enter ID Number:'
    },
    {
      type: 'input',
      name: 'eMail',
      message: 'Enter Email:'
    }
  ]).then((data) => {

    switch (data.person) {
      // case 'Manager': constructManager(data.push(addManager()));
      //   break;

      case 'Engineer': constructEngineer(data.push(addEngineer()));
        break;

      case 'Intern': constructIntern(data.push(addIntern()));
        break;

      default: alert("Error in Switch Statement: " + data.person);
        break;
    }
  });
}

function addManager() {

  inquirer.prompt([
    {
      type: 'input',
      name: 'fullName',
      message: 'Enter Full Name:',
    },
    {
      type: 'input',
      name: 'idNum',
      message: 'Enter ID Number:',
    },
    {
      type: 'input',
      name: 'eMail',
      message: 'Enter Email:',
    },
    {
      type: 'input',
      name: 'officeNum',
      message: 'Enter Office Number:',
    }
  ]).then((dataM) => {

    //  const manArr = [{person: 'Manager'}]

    //  dataM.unshift(manArr);
    return dataM;
  })
}

function addEngineer() {

  inquirer.prompt([
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter Github Username:'
    }
  ]).then((dataE) => {
    return dataE;
  })
}

function addIntern() {

  const intern = inquirer.prompt([
    {
      'type': 'input',
      'name': 'school',
      'message': 'Enter School'
    }
  ]).then((dataI) => {
    return dataI;
  })
}

function constructManager(data) {
  const manager = new Manager(data.fullName, data.idNum, data.eMail, data.officeNum)
  console.log("Manager:", manager)

}
function constructEngineer(data) {
  const engineer
    = new Engineer(data.fullName, data.idNum, data.eMail, data.githubUsername)
  console.log("Engineer:", engineer)

}
function constructIntern(data) {
  const intern
    = new Intern(data.fullName, data.idNum, data.eMail, data.school)
  console.log("Intern:", intern)

}

