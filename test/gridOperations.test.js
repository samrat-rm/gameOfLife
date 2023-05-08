const GridOperations = require("../utils/gridOperations");
const DeadCell = require("../utils/deadCell");
const AliveCell = require("../utils/aliveCell");
const Address = require("../utils/address");

describe("GridOperations", () => {
    let gridOperations;
    beforeEach(() => {
        gridOperations = new GridOperations(3, 3);
    });

    it("should be instantiated with the correct number of rows and columns", () => {
        expect(gridOperations.rows).toEqual(3);
        expect(gridOperations.cols).toEqual(3);
        expect(gridOperations.grid.length).toEqual(3);
        expect(gridOperations.grid[0].length).toEqual(3);
    });

    it("should generate a grid with random AliveCell and DeadCell instances", () => {
        const aliveCells = gridOperations.grid
            .flat()
            .filter((cell) => cell instanceof AliveCell);
        const deadCells = gridOperations.grid
            .flat()
            .filter((cell) => cell instanceof DeadCell);
        expect(aliveCells.length).toBeGreaterThan(0);
        expect(deadCells.length).toBeGreaterThan(0);
    });

    it("should update the grid correctly (underpopulation) ", () => {
        // create a grid
        const testGridOperations = new GridOperations(3, 3);
        const testCellState = [
            DeadCell,
            AliveCell,
            DeadCell,

            DeadCell,
            AliveCell,
            DeadCell,

            DeadCell,
            AliveCell,
            DeadCell,
        ];
        testGridOperations.grid = customGrid(testCellState, 3, 3);
        // update the grid
        let updatedGrid = testGridOperations.updateGrid();
        updatedGrid = updatedGrid.flat();
        const expectedGrid = [
            DeadCell,
            DeadCell,
            DeadCell,

            AliveCell,
            AliveCell,
            AliveCell,

            DeadCell,
            DeadCell,
            DeadCell,
        ];

        for (let cell = 0; cell < updatedGrid.length; cell++) {
            expect(updatedGrid[cell] instanceof expectedGrid[cell]).toBe(true);
        }
    });

    it("live cell with two or three live neighbors lives on to the next generation ", () => {
        // create a grid
        const testGridOperations = new GridOperations(3, 3);
        const testCellState = [
            AliveCell,
            AliveCell,
            DeadCell,

            AliveCell,
            DeadCell,
            DeadCell,

            AliveCell,
            AliveCell,
            AliveCell,
        ];
        testGridOperations.grid = customGrid(testCellState, 3, 3);
        // update the grid
        let updatedGrid = testGridOperations.updateGrid();
        updatedGrid = updatedGrid.flat();
        expect(updatedGrid[0] instanceof AliveCell).toBe(true);
        expect(updatedGrid[1] instanceof AliveCell).toBe(true);
        expect(updatedGrid[6] instanceof AliveCell).toBe(true);
        expect(updatedGrid[7] instanceof AliveCell).toBe(true);
    });

    it("dead cell with exactly three live neighbors becomes a live cell, as if by reproduction", () => {
        // create a grid
        const testGridOperations = new GridOperations(3, 3);
        const testCellState = [
            AliveCell,
            AliveCell,
            DeadCell,

            AliveCell,
            AliveCell,
            AliveCell,

            DeadCell,
            AliveCell,
            DeadCell,
        ];
        testGridOperations.grid = customGrid(testCellState, 3, 3);
        // update the grid
        let updatedGrid = testGridOperations.updateGrid();
        updatedGrid = updatedGrid.flat();

        expect(updatedGrid[8] instanceof AliveCell).toBe(true);
        expect(updatedGrid[6] instanceof AliveCell).toBe(true);
        expect(updatedGrid[2] instanceof AliveCell).toBe(true);
    });

    it("live cell with more than three live neighbors dies, as if by overpopulation", () => {
        // create a grid
        const testGridOperations = new GridOperations(3, 3);
        const testCellState = [
            AliveCell,
            AliveCell,
            DeadCell,

            AliveCell,
            AliveCell,
            AliveCell,

            DeadCell,
            AliveCell,
            DeadCell,
        ];
        testGridOperations.grid = customGrid(testCellState, 3, 3);
        // update the grid
        let updatedGrid = testGridOperations.updateGrid();
        updatedGrid = updatedGrid.flat();

        expect(updatedGrid[4] instanceof DeadCell).toBe(true);
    });
});

function customGrid(cellState, rows, cols) {
    let ind = 0;
    let customGrid = [];
    for (let row = 0; row < rows; row++) {
        let gridRow = [];
        for (let col = 0; col < cols; col++) {
            let cellClass = cellState[ind];
            let address = new Address(row, col);
            gridRow.push(new cellClass(address));
            ind++;
        }
        customGrid.push(gridRow);
    }
    return customGrid;
}
