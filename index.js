const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { listenerCount } = require('process');
const teamArray = []

function init() {
    console.log('Welcome');

    // prompt to get manager's information
    inquirer.prompt([ 
        {
            name: 'managerName',
            message: 'What is your name? ',
        },

        {
            name: 'managerId',
            message: 'What is your ID?',
        },

        {
            name: 'managerEmail',
            message: 'What is your email?'
        },

        {
            name: 'managerOfficeNumber',
            message: 'What is your office number?'
        }

    ])
    .then(res=> {
        const manager = new Manager(res.managerName, res.managerId, res.managerEmail , res.managerOfficeNumber) 
        
        // adding new manager to team array
        teamArray.push(manager)
    })

    
} 

function addTeamMember() {
    console.log('Build Your Team')

    // adding engineer, or intern 
    inquirer.prompt([

        {
            type: 'list',
            name: 'role',
            message: 'Do you want to add an intern or an engineer?',
            choices: ['Engineer', 'Intern']
        }
    ])
    
    .then(res=> {
        if (res.role === 'Engineer') {
            createEnginner()

        }

        if (res.role === 'Intern') {
            createIntern()
        }
    })   
        
}






init()

