const Employee = require('./employee')

class Intern extends Employee {
    constructor(school) {
        this.school = school;
        this.role = 'intern'
        super(name, id, email)
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return this.role
    }
}