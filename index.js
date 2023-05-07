const { Grid } = require("./grid");
const { GameOfLife } = require("./game");

const grid = new Grid(3, 5);
const game = new GameOfLife(grid);
game.tick();
game.tick();
game.tick();
