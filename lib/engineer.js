const Member = require('./member')

class Engineer extends Member {
    constructor(fullName,idNum, eMail, githubUsername) {
        super(p_fullName, idNum, eMail)
        this.githubUsername = githubUsername ?? 'Github UserName'
    }

    setGithubUsername( githubUsername) {
        this.githubUsername = githubUsername;
    }

    getGithubUsername() {
        return this.githubUsername;
     }
}

module.exports = Engineer;