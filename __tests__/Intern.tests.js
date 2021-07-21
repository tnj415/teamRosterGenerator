const Intern = require("../lib/intern.js")

describe("Classes", () => {
    describe("Initialization", () => {
        it("should return an object with member information - 'name', 'id', and 'email'", () => {
            //Act
            const obj = new Intern();

            //Assert
            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
        });

        it("should set 'name', idNum', and 'eMail', when created", () => {
            //Arrange
            const name = "testName";
            const id = "testId";
            const email = "testEmail";

            //Act
            const obj = new Intern(name, id, email);

            //Assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
        });

        it("should default 'name' to 'Name, 'id' to 'ID', and 'email' to 'Email'", () => {
            //Act
            const obj = new Intern();

            //Assert
            expect(obj.name).toEqual('Name')
            expect(obj.id).toEqual('ID')
            expect(obj.email).toEqual('Email')
        });
    });

});