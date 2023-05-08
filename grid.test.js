const { Grid } = require("./grid");
const { Game } = require("./game");

describe("Grid", () => {
    let gridData;

    beforeEach(() => {
        gridData = new Grid(3, 3);
    });

    test("constructor initializes grid with random cells", () => {
        // step
        expect(gridData).toBeDefined();
        expect(gridData.rows).toBe(3);
        expect(gridData.columns).toBe(3);
        expect(gridData.cell(0, 0)).toBeDefined();
        expect(gridData.cell(1, 2)).toBeDefined();
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

    test("cell method returns false for invalid input", () => {
        // Check if the cell method returns false for invalid input
        expect(gridData.cell(-1, 0)).toBe(false);
        expect(gridData.cell(3, 2)).toBe(false);
        expect(gridData.cell(2, 3)).toBe(false);
    });

    test("Check if the cell method returns defined value", () => {
        // Check if the cell method returns false for invalid input
        gridData.grid = [
            [true, false, true],
            [true, true, false],
            [true, false, true],
        ];
        expect(gridData.cell(1, 0)).toBe(true);
        expect(gridData.cell(0, 2)).toBe(true);
    });

    test("updateGrid method updates grid correctly", () => {
        // Set some cells manually
        gridData.grid = [
            [true, false, true],
            [false, true, false],
            [true, true, false],
        ];

        // Call the updateGrid method and check if the grid is updated correctly
        const newGrid = gridData.updateGrid();

        expect(newGrid).toBeDefined();
        expect(newGrid.length).toBe(3);
        // loop
        const expected = [
            [false, true, false],
            [false, false, true],
            [true, true, false],
        ];
        for (let i = 0; i < 3; i++) {
            expect(newGrid[i]).toEqual(expected[i]);
        }
    });

    test("Live cell with fewer than two live neighbors dies (underpopulation)", () => {
        const grid = new Grid(3, 3);
        grid.grid = [
            [false, false, false],
            [false, true, false],
            [false, false, false],
        ];

        const newGrid = grid.updateGrid();

        expect(newGrid[1][1]).toBe(false);
    });

    test("Live cell with more than three live neighbors dies (overcrowding)", () => {
        const grid = new Grid(3, 3);
        grid.grid = [
            [true, true, true],
            [true, true, true],
            [true, true, true],
        ];

        const newGrid = grid.updateGrid();

        expect(newGrid[1][1]).toBe(false);
    });

    test("Dead cell with exactly three live neighbors becomes a live cell (reproduction)", () => {
        const grid = new Grid(3, 3);
        grid.grid = [
            [false, true, false],
            [false, false, true],
            [true, false, false],
        ];

        const newGrid = grid.updateGrid();

        expect(newGrid[1][1]).toBe(true);
    });
});

// function updateGridForTesting(grid) {
//     const rows = grid.length;
//     const columns = grid[0].length;
//     const newGrid = new Array(rows);
//     for (let row = 0; row < rows; row++) {
//         newGrid[row] = new Array(columns).fill(false);
//     }
//     // Update each cell based on its neighbors
//     for (let row = 0; row < rows; row++) {
//         for (let col = 0; col < columns; col++) {
//             const neighbors = countNeighbors(row, col, grid);
//             if (grid[row][col]) {
//                 if (neighbors === 2 || neighbors === 3) {
//                     newGrid[row][col] = true;
//                 }
//             } else {
//                 if (neighbors === 3) {
//                     newGrid[row][col] = true;
//                 }
//             }
//         }
//     }
//     return newGrid;
// }

// function countNeighbors(row, col, grid) {
//     const rows = grid.length;
//     const columns = grid[0].length;
//     let count = 0;
//     // 9 times
//     for (let r = row - 1; r <= row + 1; r++) {
//         for (let c = col - 1; c <= col + 1; c++) {
//             if (r >= 0 && r < rows && c >= 0 && c < columns && grid[r][c]) {
//                 count++;
//             }
//         }
//     }
//     // -1 because we inclued the central grid.
//     if (grid[row][col]) {
//         count--;
//     }
//     return count;
// }
