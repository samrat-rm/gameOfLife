const { GameOfLife } = require("./game");
const { Grid } = require("./grid");

describe("GameOfLife", () => {
    let grid;

    beforeEach(() => {
        grid = new Grid(3, 3);
    });

    it("should create a new GameOfLife instance with a valid grid", () => {
        const game = new GameOfLife(grid);
        expect(game).toBeInstanceOf(GameOfLife);
    });

    it("should throw an error if a invalid grid is passed", () => {
        expect(() => {
            const game = new GameOfLife(null);
        }).toThrow("Invalid grid");
    });

    test("tick method updates grid correctly", () => {
        grid.grid = [
            [true, false, true],
            [true, true, false],
            [true, false, true],
        ];
        const game = new GameOfLife(grid);
        game.tick();
        const newGrid = grid.grid;
        const expected = [
            [true, false, false],
            [true, false, true],
            [true, false, false],
        ];

        expect(newGrid).toBeDefined();
        expect(newGrid.length).toBe(3);
        for (let i = 0; i < 3; i++) {
            expect(newGrid[i]).toEqual(expected[i]);
        }
    });
});
