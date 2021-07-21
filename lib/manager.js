const Member = require('./employee')

class Manager extends Member {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber ?? 'Office Number'
        this.role = 'Manager' 
    }

    setOfficeNumber(officeNumber) {
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;