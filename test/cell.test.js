const Cell = require("../utils/cell");
const Address = require("../utils/address");

describe("Cell", () => {
    describe("constructor", () => {
        it("should set the address and state values", () => {
            const address = new Address(3, 5);
            const cell = new Cell(address, true);
            expect(cell.address).toBe(address);
            expect(cell.state).toBe(true);
        });
    });

    describe("getState", () => {
        it("should return the current state of the cell", () => {
            const address = new Address(3, 5);
            const cell = new Cell(address, true);
            expect(cell.getState()).toBe(true);
        });
    });

    describe("updateState", () => {
        it("should update the state of the cell based on the number of alive neighbors", () => {
            const address1 = new Address(0, 0);
            const cell1 = new Cell(address1, true);
            const address2 = new Address(0, 1);
            const cell2 = new Cell(address2, true);
            const address3 = new Address(0, 2);
            const cell3 = new Cell(address3, false);
            const address4 = new Address(1, 0);
            const cell4 = new Cell(address4, true);
            const address5 = new Address(1, 1);
            const cell5 = new Cell(address5, false);
            const address6 = new Address(1, 2);
            const cell6 = new Cell(address6, false);
            const address7 = new Address(2, 0);
            const cell7 = new Cell(address7, false);
            const address8 = new Address(2, 1);
            const cell8 = new Cell(address8, false);
            const address9 = new Address(2, 2);
            const cell9 = new Cell(address9, false);
            const grid = [
                [cell1, cell2, cell3],
                [cell4, cell5, cell6],
                [cell7, cell8, cell9],
            ];
            const neighbors = [cell1, cell2, cell4, cell5, cell6];
            cell5.updateState(neighbors);
            expect(cell5.getState()).toBe(true);
        });
    });

    describe("getAddress", () => {
        it("should return the address of the cell", () => {
            const address = new Address(3, 5);
            const cell = new Cell(address, true);
            expect(cell.getAddress()).toBe(address);
        });
    });
});
