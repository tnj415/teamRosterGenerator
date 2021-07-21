const Member = require('./employee')

class Engineer extends Member {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github ?? 'Github UserName'
        this.role = 'Engineer'
    }

    setGithubUsername( p_githubUsername) {
        this.githubUsername = github;
    }

    getGithubUsername() {
        return this.github;
     }

    //  setRole() {
    //     this.role = 'Engineer'
    //  }

     getRole() {
         return 'Engineer'
     }
}

module.exports = Engineer;