const Address = require("../utils/address");

describe("Address", () => {
    describe("constructor", () => {
        it("should set the row and column values", () => {
            const address = new Address(3, 5);
            expect(address.row).toBe(3);
            expect(address.col).toBe(5);
        });
    });
});
