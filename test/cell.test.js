const Cell = require("../utils/cell");
const Address = require("../utils/address");

describe("Cell", () => {
    it("should be instantiated with an address and state", () => {
        const address = new Address(0, 0);
        const cell = new Cell(address, true);
        expect(cell.address).toEqual(address);
        expect(cell.state).toEqual(true);
    });

    it("should throw an error if instantiated with invalid parameters", () => {
        expect(() => new Cell({}, true)).toThrow(
            "Invalid parameters for Cell class"
        );
        expect(() => new Cell(new Address(0, 0), "true")).toThrow(
            "Invalid parameters for Cell class"
        );
    });

    it("should throw an error when updateState is called", () => {
        const cell = new Cell(new Address(0, 0), true);
        expect(() => cell.updateState([])).toThrow("Not implemented");
    });
});
