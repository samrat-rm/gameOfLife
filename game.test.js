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
});
