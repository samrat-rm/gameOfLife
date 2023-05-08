const GridOperations = require("./utils/gridOperations");
const { GameOfLife } = require("./utils/gameOfLife");
const AliveCell = require("./utils/aliveCell");
const DeadCell = require("./utils/deadCell");
const Address = require("./utils/address");
const Cell = require("./utils/cell");

const grid = new GridOperations(3, 3);
// // const address = new Address(1, 1);
const game = new GameOfLife(grid);
const updatedGrid = game.tick();
console.log(updatedGrid);
