const Employee = require('./employee')

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
        this.role = 'Manager'
        super(name, id, email)
    }

    getRole() {
        return this.role
    }
}