const { Grid } = require("./grid");
const { GameOfLife } = require("./game");
const { Cell } = require("./cell");

const gridData = new Grid(3, 3);
const game = new GameOfLife(gridData);
game.tick();
