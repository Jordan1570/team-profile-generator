const Employee = require('./employee')

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
        this.role = 'Engineer'
        super(name, id, email);
    }

    getGithub() {
        console.log(`the engineers github is ${this.github}`)
    }

    getRole() {
        
    }
}