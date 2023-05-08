const { GameOfLife } = require("../utils/gameOfLife");
const GridOperations = require("../utils/gridOperations");

describe("GameOfLife", () => {
    let grid;

    beforeEach(() => {
        grid = new GridOperations(3, 3);
    });

    it("should throw an error if an invalid grid is provided", () => {
        expect(() => new GameOfLife(null)).toThrow("Invalid grid");
        expect(() => new GameOfLife("invalid")).toThrow("Invalid grid");
    });

    it("should initialize the game with the given grid", () => {
        const game = new GameOfLife(grid);
        expect(game).toBeDefined();
    });

    it("should update the grid and print it on each tick", () => {
        const game = new GameOfLife(grid);
        const spy = jest.spyOn(console, "log").mockImplementation(() => {});
        game.tick();
        expect(spy).toHaveBeenCalledTimes(2);
        expect(spy).toHaveBeenCalledWith(expect.stringContaining("-"));
        expect(spy).toHaveBeenCalledWith(expect.stringContaining("O"));
        spy.mockRestore();
    });

    it("tick method should update the grid and return a valid grid", () => {
        const game = new GameOfLife(grid);
        const updatedGrid = game.tick();
        const row = updatedGrid.grid;
        const col = row[0];
        expect(row.length).toEqual(3);
        expect(col.length).toEqual(3);
    });
});
