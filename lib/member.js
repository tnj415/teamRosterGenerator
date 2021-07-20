class Member {
    constructor(p_fullName, p_idNum, p_eMail) {
        this.fullName = p_fullName ?? 'Member Full Name'
        this.idNum = p_idNum ?? 'ID Number'
        this.eMail = p_eMail ?? 'eMail'
    }

    setfullName(p_fullName) {
		this.fullName = p_fullName;
	}
	setidNum(p_idNum) {
		this.idNum = p_idNum;
	}
	seteMail(p_eMail) {
		this.eMail = p_eMail;
	}

	getfullName() {
		return this.fullName;
	}
	getidNum() {
		return this.idNum;
	}
	geteMail() {
		return this.eMail;
	}
}

module.exports = Member;

