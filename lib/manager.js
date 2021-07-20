const Member = require('./member')

class Manager extends Member {
    constructor(p_fullName, p_idNum, p_eMail, p_officeNum) {
        super(p_fullName, p_idNum, p_eMail)
        this.officeNum = p_officeNum ?? 'Office Number'
        this.title = 'Manager'
    }

    setOfficeNumber(p_officeNum) {
        this.officeNum = p_officeNum;
    }

    getOfficeNumber() {
        return this.officeNum;
    }
}

module.exports = Manager;