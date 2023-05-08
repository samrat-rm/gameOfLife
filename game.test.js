const { GameOfLife } = require("./game");
const { Grid } = require("./grid");

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
        gridData.grid = [
            [true, false, true],
            [true, true, false],
            [true, false, true],
        ];
        const game = new GameOfLife(gridData);
        game.tick();
        const newGridData = gridData.grid;
        const expected = [
            [true, false, false],
            [true, false, true],
            [true, false, false],
        ];

        expect(newGridData).toBeDefined();
        expect(newGridData.length).toBe(3);
        for (let i = 0; i < 3; i++) {
            expect(newGridData[i]).toEqual(expected[i]);
        }
    });
    test("tick method called multiple times, should update the grid correctly ", () => {
        gridData.grid = [
            [true, false, true],
            [true, true, false],
            [true, false, true],
        ];
        const game = new GameOfLife(gridData);
        game.tick();
        game.tick();
        const newGridData = gridData.grid;
        const expected = [
            [false, true, false],
            [true, false, false],
            [false, true, false],
        ];

        expect(newGridData).toBeDefined();
        expect(newGridData.length).toBe(3);
        for (let i = 0; i < 3; i++) {
            expect(newGridData[i]).toEqual(expected[i]);
        }
    });
});
