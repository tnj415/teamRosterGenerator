class Member {
    constructor(fullName, idNum, eMail) {
        this.fullName = fullName ?? 'Member Full Name'
        this.idNum = idNum ?? 'ID Number'
        this.eMail = eMail ?? 'eMail'
    }
}

class Manager extends Member {
    constructor(fullName, idNum, eMail, officeNum) {
        super(fullName, idNum, eMail)
        this.officeNum = officeNum ?? 'Office Number'
    }
}

class Engineer extends Member {
    constructor(fullName, idNum, eMail, githubUsername) {
        super(fullName, idNum, eMail)
        this.githubUsername = githubUsername ?? 'Github UserName'
    }
}


class Intern extends Member {
    constructor(fullName, idNum, eMail, school) {
        super(fullName, idNum, eMail)
        this.school = school ?? 'school'
    }
}

var manObj = new Manager(null,null,null,"123123")
var engObj = new Engineer(null,null,null,"tnj415")
var intObj = new Intern(null,null,null,"mySchool")

console.log(manObj)
console.log(engObj)
console.log(intObj)