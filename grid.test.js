const { Grid } = require("./grid");

describe("Grid", () => {
    let grid;

    beforeEach(() => {
        grid = new Grid(3, 3);
    });

    test("constructor initializes grid with random cells", () => {
        expect(grid).toBeDefined();
        expect(grid.rows).toBe(3);
        expect(grid.columns).toBe(3);
        expect(grid.cell(0, 0)).toBeDefined();
    });

    test("cell method returns false for invalid input", () => {
        // Check if the cell method returns false for invalid input
        expect(grid.cell(-1, 0)).toBe(false);
        expect(grid.cell(3, 2)).toBe(false);
        expect(grid.cell(2, 3)).toBe(false);
    });

    test("constructor throws error for invalid input", () => {
        expect(() => new Grid(null, null)).toThrow(
            "Invalid row or colum value"
        );
        expect(() => new Grid(0, 0)).toThrow("Invalid row or colum value");
        expect(() => new Grid(1, null)).toThrow("Invalid row or colum value");
        expect(() => new Grid(undefined, 2)).toThrow(
            "Invalid row or colum value"
        );
        expect(() => new Grid("invalid", "input")).toThrow(
            "Invalid row or colum value"
        );
    });

    test("updateGrid method updates grid correctly", () => {
        // Set some cells manually
        grid.setGrid([
            [true, false, true],
            [false, true, false],
            [true, true, false],
        ]);

        // Call the updateGrid method and check if the grid is updated correctly
        const newGrid = grid.updateGrid();

        expect(newGrid).toBeDefined();
        expect(newGrid.length).toBe(3);
        expect(newGrid[0]).toEqual([false, true, false]);
        expect(newGrid[1]).toEqual([false, false, true]);
        expect(newGrid[2]).toEqual([true, true, false]);
    });

    test("Live cell with fewer than two live neighbors dies (underpopulation)", () => {
        const grid = new Grid(3, 3);
        grid.setGrid([
            [false, false, false],
            [false, true, false],
            [false, false, false],
        ]);

        const newGrid = grid.updateGrid();

        expect(newGrid[1][1]).toBe(false);
    });

    test("Live cell with more than three live neighbors dies (overcrowding)", () => {
        const grid = new Grid(3, 3);
        grid.setGrid([
            [true, true, true],
            [true, true, true],
            [true, true, true],
        ]);

        const newGrid = grid.updateGrid();

        expect(newGrid[1][1]).toBe(false);
    });

    test("Dead cell with exactly three live neighbors becomes a live cell (reproduction)", () => {
        const grid = new Grid(3, 3);
        grid.setGrid([
            [false, true, false],
            [false, false, true],
            [true, false, false],
        ]);

        const newGrid = grid.updateGrid();

        expect(newGrid[1][1]).toBe(true);
    });
});
