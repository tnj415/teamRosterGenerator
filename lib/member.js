class Member {
    constructor(fullName, idNum, eMail) {
        this.fullName = fullName ?? 'Member Full Name'
        this.idNum = idNum ?? 'ID Number'
        this.eMail = eMail ?? 'eMail'
    }

    set fullName(fullName) {
		this.fullName = fullName;
	}
	set idNum(idNum) {
		this.idNum = idNum;
	}
	set eail(eMail) {
		this.eMail = eMail;
	}
	get fullName() {
		return this.fullName;
	}
	get idNum() {
		return this.idNum;
	}
	get eMail() {
		return this.eMail;
	}
}



