const GridOperations = require("./utils/gridOperations");
const { GameOfLife } = require("./utils/game");
const AliveCell = require("./utils/aliveCell");
const DeadCell = require("./utils/deadCell");
const Address = require("./utils/address");

const grid = new GridOperations(3, 3);
// const address = new Address(1, 1);
const game = new GameOfLife(grid);
game.tick();
