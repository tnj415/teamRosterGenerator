const Employee = require('./employee')

class Engineer extends Member {
    constructor(fullName, idNum, eMail, githubUsername) {
        super(fullName, idNum, eMail)
        this.githubUsername = githubUsername ?? 'Github UserName'
    }

    setGithubUsername( githubUsername) {
        this.githubUsername = githubUsername;
    }

    getGithubUsername() {
        return this.githubUsername;
     }
}