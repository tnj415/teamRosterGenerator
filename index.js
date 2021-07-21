const inquirer = require('inquirer');
// const Employee = require('./lib/employee.js')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const template = require('./src/template');
const endTemplate = require('./src/endtemplate');


// const managerArr = [];
// const engineerArr = [];
// const internArr = [];






async function init() {

  const employeeData = await addEmployee();
  const managerData = await addManager();

  await constructManager(employeeData, managerData);

  await promptAction();

  // generateManagerCards();
  // generateEngineerCards();
  // generateInternCards();

  //module.exports = {membersM, membersE, membersI}
endTemplate()
}

async function promptAction() {

  // let employeeData = {};


  const response = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What Would You Like To Do?:',
      choices: ['Add Engineer', 'Add Intern', 'Exit Team Builder']
    }
  ])


  switch (response.action) {

    case 'Add Engineer':
      const employeeData2 = await addEmployee();
      const engineerData = await addEngineer();
      constructEngineer(employeeData2, engineerData);
      await promptAction();

      break;

    case 'Add Intern':
      employeeData = await addEmployee();
      const internData = await addIntern();
      await constructIntern(employeeData, internData);
      await promptAction();

      break;

    case 'Exit Team Builder':
      return;

    default: alert("Error in Switch Statement: Unable to " + response.action);
      break;
  }
}

async function addEmployee() {
  const employeeData = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter Full Name:',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter ID Number:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter Email:',
    }])

    console.log("Employee Data: ", employeeData);
  return employeeData
}

async function addManager() {
  const data = await inquirer.prompt([
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Enter Office Number:',
    }])

    
  return data;
}

async function addEngineer() {

  const data = await inquirer.prompt([
    {
      type: 'input',
      name: 'github',
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

async function constructManager(employeeData, managerData) {

  const employee = new Manager(
    employeeData.name,
    employeeData.id,
    employeeData.email,
    managerData.officeNumber)

  console.log("Manager:", employee)
  template(employee)
  

}
async function constructEngineer(employeeData, engineerData) {
 
  const engineer = new Engineer(
    employeeData.name,
    employeeData.id,
    employeeData.email,
    engineerData.github)

  console.log("Engineer:", engineer)
  template(engineer)

}
async function constructIntern(employeeData, internData) {
 
  const employee = new Intern(
    employeeData.name,
    employeeData.id,
    employeeData.email,
    internData.school)

  console.log("Intern:", employee)
  template(employee)

}

init()