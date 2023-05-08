const { Grid } = require("./utils/grid");
const { GameOfLife } = require("./utils/game");
const { Cell } = require("./utils/cell");

const gridData = new Grid(3, 3);
const game = new GameOfLife(gridData);
game.tick();
game.tick();
game.tick();
