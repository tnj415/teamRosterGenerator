class Member {
    constructor(name, id, email) {
        this.name = name ?? 'Name'
        this.id = id ?? 'ID '
        this.email = email ?? 'Email'
    }

    setName(name) {
		this.name = name;
	}
	setId(id) {
		this.id = id;
	}
	setEmail(email) {
		this.email = email;
	}

	getName() {
		return this.name;
	}
	getId() {
		return this.id;
	}
	getEmail() {
		return this.email;
	}
}

module.exports = Member;

