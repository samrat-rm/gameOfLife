const GridOperations = require("./utils/gridOperations");
const { GameOfLife } = require("./utils/game");

const grid = new GridOperations(3, 3);
const game = new GameOfLife(grid);
game.tick();
game.tick();
