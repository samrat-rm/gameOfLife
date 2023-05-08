const Cell = require("../utils/cell");
const Address = require("../utils/address");
const GridOperations = require("../utils/gridOperations");

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
            const gridOperations = new GridOperations(3, 3);
            const customState = [
                false,
                false,
                false,
                true,
                true,
                true,
                false,
                true,
                true,
            ];
            gridOperations.grid = customGrid(customState);
            const cell = gridOperations.getCell(1, 1);
            const neighbours = gridOperations.getNeighbors(cell);
            const recievedState = cell.updateState(neighbours);
            expect(recievedState).toBe(false);
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

function customGrid(stateArr) {
    let ind = 0;
    let gridArr = [];
    for (let row = 0; row < 3; row++) {
        let gridRow = [];
        for (let col = 0; col < 3; col++) {
            let address = new Address(row, col);
            let cell = new Cell(address, stateArr[ind]);
            gridRow.push(cell);
            ind++;
        }
        gridArr.push(gridRow);
    }
    return gridArr;
}
