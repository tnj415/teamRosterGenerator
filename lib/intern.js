const Member = require('./employee')

class Intern extends Member {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school ?? 'school'
        this.role = 'Intern'
    }

    setSchool(school) {
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    // setRole() {
    //     this.role = 'Intern' 
    // }
    
    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;