const Member = require('./member')

class Manager extends Member {
    constructor(fullName, idNum, eMail, officeNum) {
        super(fullName, idNum, eMail)
        this.officeNum = officeNum ?? 'Office Number'
    }

    setOfficeNumber(officeNum) {
        this.officeNum = officeNum;
    }

    getOfficeNumber() {
        return this.officeNum;
    }
}

module.exports = Manager;