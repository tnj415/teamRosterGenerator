const Employee = require('./member')

class Intern extends Member {
    constructor(fullName, idNum, eMail, school) {
        super(fullName, idNum, eMail)
        this.school = school ?? 'school'
    }

    setSchool(school) {
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}