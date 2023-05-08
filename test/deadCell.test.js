const DeadCell = require("../utils/deadCell");
const AliveCell = require("../utils/aliveCell");
const Address = require("../utils/address");

describe("DeadCell", () => {
    let address, address1, address2, address3;
    beforeEach(() => {
        address = new Address(0, 0);
        address1 = new Address(0, 1);
        address2 = new Address(0, 2);
        address3 = new Address(1, 0);
    });
    it("should be instantiated with an address and a state of false", () => {
        const cell = new DeadCell(address1);
        expect(cell.address).toEqual(address1);
        expect(cell.state).toEqual(false);
    });

    it("should return a new AliveCell if it has exactly 3 live neighbors", () => {
        const cell = new DeadCell(address);
        const neighbors = [
            new AliveCell(address1),
            new AliveCell(address2),
            new AliveCell(address3),
        ];
        const state = cell.updateState(neighbors);
        const nextCell = state
            ? new AliveCell(cell.address)
            : new DeadCell(cell.address);
        expect(nextCell instanceof AliveCell).toBe(true);
        expect(nextCell.address).toBe(address);
    });

    it("should return itself if it has any number of live neighbors other than 3", () => {
        const cell = new DeadCell(address);
        const neighbors = [new AliveCell(address1), new AliveCell(address2)];
        const state = cell.updateState(neighbors);
        const nextCell = state
            ? new AliveCell(cell.address)
            : new DeadCell(cell.address);
        expect(nextCell instanceof DeadCell).toEqual(true);
        expect(nextCell.address).toEqual(address);
    });
});
