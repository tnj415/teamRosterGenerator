const Member = require('./member')

class Engineer extends Member {
    constructor(p_fullName,p_idNum, p_eMail, p_githubUsername) {
        super(p_fullName, p_idNum, p_eMail)
        this.githubUsername = p_githubUsername ?? 'Github UserName'
        this.title = 'Engineer'
    }

    setGithubUsername( p_githubUsername) {
        this.githubUsername = p_githubUsername;
    }

    getGithubUsername() {
        return this.githubUsername;
     }
}

module.exports = Engineer;