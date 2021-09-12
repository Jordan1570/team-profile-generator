const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { listenerCount } = require('process');
const { default: generate } = require('@babel/generator');
const generateTeamHtml = require('./generateTeamHtml');
const teamArray = []

function init() {
    console.log('Welcome Bossman');

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


// adding team memmber to team by asking Engineer or intern
function addTeamMember() {
    console.log('Hello')

    // adding engineer, or intern 
    inquirer.prompt([

        {
            type: 'list',
            name: 'role',
            message: 'Do you want to add an intern or an engineer?',
            choices: ['Engineer', 'Intern', 'None']
        }
    ])
    
    .then(res=> {
        console.log(res.role)
        if (res.role === 'Engineer') {
            createEnginner()

        }

        if (res.role === 'Intern') {
            console.log(res.role)
            createIntern()
        }
    })   
        
}

// creating engineer card with prompts
function createEnginner() {
    console.log('Hi Genius')

    inquirer.prompt([

        {
           name: 'engineerName',
           message: 'What is your name?'
        },

        {
            name: 'engineerId',
            message: 'What is your ID?'
        },

        {
            name: 'engineerEmail',
            message: 'What is your email?'
        },

        {
            name: 'engineerGithub',
            message: 'What is your Github?'
        }
 
    ])
    .then(res=> {
        const engineer = new Engineer(res.engineerName, res.engineerId, res.engineerEmail , res.enginnerGithub) 
        
        // adding new manager to team array
        teamArray.push(engineer)
    })
}

// creating intern card with prompts
function createIntern() {
    console.log('Hi Future Genius')

    inquirer.prompt([

        {
            name: 'internName',
            message: 'What is your name?'
        },

        {
            name: 'internId',
            message: 'What is your ID?',
        },

        {
            name: 'internEmail',
            message: 'What is your email?'
        },

        {
            name: 'internSchool',
            message: 'What school do you go to?'
        }
    ])
    .then(res=> {
        const intern = new Intern(res.internName, res.internId, res.internEmail , res.internSchool) 
        
        // adding new manager to team array
        teamArray.push(intern)
    })

}

function createTeam() {
    generateTeam(teamArray)
}

function generateTeam(team) {
    
    return `
    
    
    
    
    
    
    
    
    `
}


init()

