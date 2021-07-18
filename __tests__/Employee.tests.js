const Member = require("./lib/classes")

describe("Classes", () => {
    describe("Initialization", () => {
        it("should return an object with member information - 'name', 'idNum', and 'eMail'", () => {
            //Act
            const obj = new Member();

            //Assert
            expect("name" in obj).toEqual(true);
            expect("idNum" in obj).toEqual(true);
            expect("eMail" in obj).toEqual(true);
        });

        it("should set 'name', idNum', and 'eMail', when created", () => {
            //Arrange
            const name = "testName";
            const idNum = "testIdNum";
            const eMail = "testEmail";

            //Act
            const obj = new Member(name, idNum, eMail);

            //Assert
            expect(obj.name).toEqual(name);
            expect(obj.idNum).toEqual(idNum);
            expect(obj.eMail).toEqual(eMail);
        });

        it("should default 'name' to 'Member Name, 'idNum' to 'ID Number', and 'eMail' to 'eMail'", () => {
            //Act
            const obj = new Member();

            //Assert
            expect(obj.name).toEqual('Member Name')
            expect(obj.idNum).toEqual('ID Number')
            expect(obj.eMail).toEqual('eMail')
        });
    });

});