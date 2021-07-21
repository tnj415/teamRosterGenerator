const Member = require('./employee')

class Manager extends Member {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNum = officeNumber ?? 'Office Number'
        this.role = 'Manager' 
    }

    setOfficeNumber(officeNumber) {
        this.officeNum = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    // setRole() {
    //     this.role = 'Manager' 
    // }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;