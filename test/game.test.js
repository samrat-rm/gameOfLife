const { GameOfLife } = require("../utils/game");
const GridOperations = require("../utils/gridOperations");
const Cell = require("../utils/cell");
const Address = require("../utils/address");

describe("GameOfLife", () => {
    let gridData;

    beforeEach(() => {
        gridData = new GridOperations(3, 3);
    });

    it("should create a new GameOfLife instance with a valid grid", () => {
        const game = new GameOfLife(gridData);
        expect(game).toBeInstanceOf(GameOfLife);
    });

    it("should throw an error if a invalid grid is passed", () => {
        expect(() => {
            const game = new GameOfLife(null);
        }).toThrow("Invalid grid");
    });

    test("tick method updates grid correctly", () => {
        let stateArr = [
            true,
            false,
            true,
            true,
            true,
            false,
            true,
            false,
            true,
        ];
        gridData.grid = customGrid(stateArr);
        const game = new GameOfLife(gridData);
        const newGridData = game.tick();

        const expectedArr = [
            true,
            false,
            false,
            true,
            false,
            true,
            true,
            false,
            false,
        ];
        const expected = customGrid(expectedArr);

        expect(newGridData).toBeDefined();
        expect(newGridData.grid.length).toBe(3);
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                expect(newGridData.grid[row][col].state).toEqual(
                    expected[row][col].state
                );
            }
        }
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
