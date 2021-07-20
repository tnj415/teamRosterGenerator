const inquirer = require('inquirer');
// const Member = require('./lib/member');
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
// const testdataCall = require('./dist/template.js');

const membersM = [];
const membersE = [];
const membersI = [];

init()

async function init() {
  const dataM = await addManager();
  constructManager(dataM);

  await buildTeam();

   module.exports = {membersM, membersE, membersI}

}

async function buildTeam() {



  const data = await inquirer.prompt([
    {
      type: 'list',
      name: 'person',
      message: 'What Would You Like To Do?:',
      choices: ['Add Engineer', 'Add Intern', 'Exit Team Builder']
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
  ])

  switch (data.person) {

    case 'Add Engineer': 

    const dataE = await addEngineer();
      constructEngineer(dataE);
      await buildTeam();

      break;

    case 'Add Intern':

    const dataI = await addIntern();
      constructIntern(dataI);
      await buildTeam();

      break;

    case 'Exit Team Builder': 
      console.log("goodbye")
      return;

    // default: alert("Error in Switch Statement: " + data.person);
    //   break;
  }
}

async function addManager() {
  const data = await inquirer.prompt([
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
    }])

  return data;
}

async function addEngineer() {

  const data = await inquirer.prompt([
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter Github Username:'
    }])

  return data;
}

async function addIntern() {

  const data = await inquirer.prompt([
    {
      'type': 'input',
      'name': 'school',
      'message': 'Enter School'
    }])

  return data;
}

function constructManager(data) {
  const manager = new Manager(data.fullName, data.idNum, data.eMail, data.officeNum)
  console.log("Manager:", manager)
  membersM.push(manager)

}
function constructEngineer(data) {
  const engineer = new Engineer(data.fullName, data.idNum, data.eMail, data.githubUsername)
  console.log("Engineer:", engineer)
  membersE.push(engineer)

}
function constructIntern(data) {
  const intern = new Intern(data.fullName, data.idNum, data.eMail, data.school)
  console.log("Intern:", intern)
  membersI.push(intern)

}

