const GridOperations = require("../utils/gridOperations");
const Cell = require("../utils/cell");
const Address = require("../utils/address");

describe("Grid", () => {
    let grid;

    beforeEach(() => {
        grid = new GridOperations(3, 3);
    });

    describe("createCell", () => {
        it("should return a new cell with a random state", () => {
            const address = new Address(3, 5);
            const cell = grid.createCell(address);

            expect(cell instanceof Cell).toBe(true);
            expect(cell.getAddress()).toBe(address);
            expect(typeof cell.getState()).toBe("boolean");
        });
    });

    describe("updateGrid", () => {
        it("should update the grid with the new state of each cell based on its neighbors", () => {
            grid.grid = [
                [
                    new Cell(new Address(0, 0), true),
                    new Cell(new Address(0, 1), true),
                    new Cell(new Address(0, 2), false),
                ],
                [
                    new Cell(new Address(1, 0), false),
                    new Cell(new Address(1, 1), false),
                    new Cell(new Address(1, 2), false),
                ],
                [
                    new Cell(new Address(2, 0), true),
                    new Cell(new Address(2, 1), true),
                    new Cell(new Address(2, 2), false),
                ],
            ];

            grid.updateGrid();

            const expectedStates = [
                [false, false, false],
                [false, false, false],
                [false, false, false],
            ];

            for (let row = 0; row < grid.rows; row++) {
                for (let col = 0; col < grid.cols; col++) {
                    expect(grid.grid[row][col].getState()).toBe(
                        expectedStates[row][col]
                    );
                }
            }
        });
    });

    describe("getNeighbors", () => {
        it("should return an array of neighboring cells for a given address", () => {
            grid.grid = [
                [
                    new Cell(new Address(0, 0), true),
                    new Cell(new Address(0, 1), false),
                    new Cell(new Address(0, 2), true),
                ],
                [
                    new Cell(new Address(1, 0), true),
                    new Cell(new Address(1, 1), false),
                    new Cell(new Address(1, 2), false),
                ],
                [
                    new Cell(new Address(2, 0), false),
                    new Cell(new Address(2, 1), true),
                    new Cell(new Address(2, 2), true),
                ],
            ];
            const expectedNeighbors = [
                new Cell(new Address(0, 0), true),
                new Cell(new Address(0, 1), false),
                new Cell(new Address(0, 2), true),

                new Cell(new Address(1, 0), true),
                new Cell(new Address(1, 1), false),

                new Cell(new Address(2, 0), false),
                new Cell(new Address(2, 1), true),
                new Cell(new Address(2, 2), true),
            ];
            const address = new Address(1, 1);
            const neighbors = grid.getNeighbors(address);
            for (let ind = 0; ind < expectedNeighbors.length; ind++) {
                expect(neighbors[ind].state).toBe(expectedNeighbors[ind].state);
            }
        });
    });
});
