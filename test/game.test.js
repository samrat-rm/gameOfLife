const { GameOfLife } = require("../game");
const { Grid } = require("../grid");
const { Cell } = require("../cell");

describe("GameOfLife", () => {
    let gridData;

    beforeEach(() => {
        gridData = new Grid(3, 3);
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
        game.tick();
        const newGridData = gridData.grid;

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
        expect(newGridData.length).toBe(3);
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                expect(newGridData[row][col].state).toEqual(
                    expected[row][col].state
                );
            }
        }
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
