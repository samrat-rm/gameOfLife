const AliveCell = require("../utils/aliveCell");
const DeadCell = require("../utils/deadCell");
const Address = require("../utils/address");

describe("AliveCell", () => {
    let address, address1, address2, address3;

    beforeEach(() => {
        address = new Address(0, 0);
        address1 = new Address(0, 1);
        address2 = new Address(0, 2);
        address3 = new Address(1, 0);
    });

    it("should be instantiated with an address and a state of true", () => {
        const cell = new AliveCell(address1);
        expect(cell.address).toEqual(address1);
        expect(cell.state).toEqual(true);
    });

    it("should return a new DeadCell if it has less than 2 live neighbors", () => {
        const cell = new AliveCell(address);
        const neighbors = [new DeadCell(address1), new DeadCell(address2)];
        const state = cell.updateState(neighbors);
        const nextCell = state
            ? new AliveCell(cell.address)
            : new DeadCell(cell.address);
        expect(nextCell instanceof DeadCell).toBe(true);
        expect(nextCell.address).toBe(address);
    });

    it("should return a new DeadCell if it has more than 3 live neighbors", () => {
        const cell = new AliveCell(address);
        const neighbors = [
            new AliveCell(address1),
            new AliveCell(address2),
            new AliveCell(address3),
            new AliveCell(address1),
        ];
        const state = cell.updateState(neighbors);
        const nextCell = state
            ? new AliveCell(cell.address)
            : new DeadCell(cell.address);
        expect(nextCell instanceof DeadCell).toBe(true);
        expect(nextCell.address).toBe(address);
    });

    it("should return itself if it has 2 or 3 live neighbors", () => {
        const cell = new AliveCell(address);
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
});
