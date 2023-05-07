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
});
