const Address = require("../utils/address");

describe("Address", () => {
    describe("constructor", () => {
        it("should set the row and column values", () => {
            const address = new Address(3, 5);
            expect(address.row).toBe(3);
            expect(address.col).toBe(5);
        });
    });

    describe("getRow", () => {
        it("should return the row value", () => {
            const address = new Address(3, 5);
            expect(address.getRow()).toBe(3);
        });
    });

    describe("getCol", () => {
        it("should return the column value", () => {
            const address = new Address(3, 5);
            expect(address.getCol()).toBe(5);
        });
    });
});
