const { Grid } = require("./grid");
const { Game } = require("./game");
const { Cell } = require("./cell");

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

    test("updateGrid method updates grid correctly", () => {
        // Set some cells manually
        let stateArr = [
            true,
            false,
            true,
            false,
            true,
            false,
            true,
            true,
            false,
        ];

        gridData.grid = customGrid(stateArr);
        // Call the updateGrid method and check if the grid is updated correctly
        const newGrid = gridData.updateGrid();

        expect(newGrid).toBeDefined();
        expect(newGrid.length).toBe(3);
        // loop
        const expectedArr = [
            false,
            true,
            false,
            false,
            false,
            true,
            true,
            true,
            false,
        ];
        const expectedGrid = customGrid(expectedArr);

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                expect(gridData.grid[row][col].state).toEqual(
                    expectedGrid[row][col].state
                );
            }
        }
    });

    test("Live cell with fewer than two live neighbors dies (underpopulation)", () => {
        const gridData = new Grid(3, 3);
        let stateArr = [
            false,
            false,
            false,
            false,
            true,
            false,
            false,
            false,
            false,
        ];

        const testGrid = customGrid(stateArr);
        gridData.grid = testGrid;
        gridData.updateGrid();
        expect(gridData.cell(1, 1).state).toBe(false);
    });

    test("Live cell with more than three live neighbors dies (overcrowding)", () => {
        const gridData = new Grid(3, 3);
        let stateArr = [true, true, true, true, true, true, true, true, true];

        const testGrid = customGrid(stateArr);
        gridData.grid = testGrid;
        gridData.updateGrid();

        expect(gridData.cell(1, 1).state).toBe(false);
    });

    test("Dead cell with exactly three live neighbors becomes a live cell (reproduction)", () => {
        const gridData = new Grid(3, 3);
        let stateArr = [
            false,
            true,
            false,
            false,
            false,
            true,
            true,
            false,
            false,
        ];

        const testGrid = customGrid(stateArr);
        gridData.grid = testGrid;
        gridData.updateGrid();

        expect(gridData.cell(1, 1).state).toBe(true);
    });
});

function customGrid(stateArr) {
    let ind = 0;
    let gridArr = [];
    for (let i = 0; i < 3; i++) {
        let gridRow = [];
        for (let j = 0; j < 3; j++) {
            let cell = new Cell(i, j, stateArr[ind]);
            gridRow.push(cell);
            ind++;
        }
        gridArr.push(gridRow);
    }
    return gridArr;
}
