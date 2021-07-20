const Member = require('./member')

class Intern extends Member {
    constructor(p_fullName, p_idNum, p_eMail, p_school) {
        super(p_fullName, p_idNum, p_eMail)
        this.school = p_school ?? 'school'
        this.title = 'Intern'
    }

    setSchool(p_school) {
        this.school = p_school;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;