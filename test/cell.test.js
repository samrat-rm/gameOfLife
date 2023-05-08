const { Cell } = require("../cell");

describe("Cell", () => {
    test("should create a new Cell instance ", () => {
        const cell = new Cell(2, 2, true);
        expect(cell).toBeInstanceOf(Cell);
    });
    test("updatePosition method updates state correctly for a live cell", () => {
        const grid = [
            [
                new Cell(0, 0, true),
                new Cell(0, 1, false),
                new Cell(0, 2, false),
            ],
            [new Cell(1, 0, true), new Cell(1, 1, true), new Cell(1, 2, false)],
            [new Cell(2, 0, false), new Cell(2, 1, true), new Cell(2, 2, true)],
        ];

        // Call the updatePosition method for a live cell
        const updatedState = grid[1][1].updatePosition(grid);

        expect(updatedState).toBe(false);
    });

    test("updatePosition method updates state correctly for a dead cell", () => {
        const grid = [
            [
                new Cell(0, 0, true),
                new Cell(0, 1, false),
                new Cell(0, 2, false),
            ],
            [new Cell(1, 0, true), new Cell(1, 1, true), new Cell(1, 2, false)],
            [new Cell(2, 0, false), new Cell(2, 1, true), new Cell(2, 2, true)],
        ];

        // Call the updatePosition method for a dead cell
        const updatedState = grid[0][1].updatePosition(grid);

        expect(updatedState).toBe(true);
    });
});
