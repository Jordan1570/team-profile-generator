const fs = require('fs');
const path = require('path')
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateTeamHtml = require('./generateTeamHtml');
const htmlFile = path.join(__dirname, 'dist', 'index.html')
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

        addTeamMember()
    })

    
} 


// adding team memmber to team by asking Engineer or intern
function addTeamMember() {

    // adding engineer, or intern 
    inquirer.prompt([

        {
            type: 'list',
            name: 'role',
            message: 'Do you want to add an intern or an engineer?',
            choices: ['Engineer', 'Intern', 'Finished']
        }
    ])
    
    .then(res=> {
        if (res.role === 'Engineer') {
            createEnginner()

        }

        if (res.role === 'Intern') {
            createIntern()
        }

        if (res.role === 'Finished') {
            createTeam()
            
        }
    })   
        
}

// creating engineer card with prompts
function createEnginner() {
    console.log('Add Your Genius\n')

    inquirer.prompt([

        {
           name: 'engineerName',
           message: 'What is the engineer\'s name?'
        },

        {
            name: 'engineerId',
            message: 'What is the engineer\'s ID?'
        },

        {
            name: 'engineerEmail',
            message: 'What is the engineer\'s email?'
        },

        {
            name: 'engineerGithub',
            message: 'What is the engineer\'s Github?'
        }
 
    ])
    .then(res=> {
        const engineer = new Engineer(res.engineerName, res.engineerId, res.engineerEmail , res.engineerGithub) 
        
        // adding new manager to team array
        teamArray.push(engineer)

        addTeamMember()
    })
}

// creating intern card with prompts
function createIntern() {
    console.log('Add Your Future Genius\n')

    inquirer.prompt([

        {
            name: 'internName',
            message: 'What is your intern\'s name?'
        },

        {
            name: 'internId',
            message: 'What is your intern\'s ID?',
        },

        {
            name: 'internEmail',
            message: 'What is your intern\'s email?'
        },

        {
            name: 'internSchool',
            message: 'What school did your intern go to?'
        }
    ])
    .then(res=> {
        // creating a new intern object
        const intern = new Intern(res.internName, res.internId, res.internEmail , res.internSchool) 
        
        // adds intern to team array
        teamArray.push(intern)

        addTeamMember()
    })

}

function createTeam() {
    // generateTeam(teamArray)
    const teamHtml = generateTeamHtml(teamArray)

    generateTeam(teamHtml)


}

function generateTeam(teamHtml) {
    
    fs.writeFile(htmlFile, teamHtml, err => {

        if (err) {
            console.log(err)
        }

        return
        
    })
    
}


init()

