const GridOperations = require("./utils/gridOperations");
const { GameOfLife } = require("./utils/game");
const AliveCell = require("./utils/aliveCell");
const DeadCell = require("./utils/deadCell");
const Address = require("./utils/address");
const Cell = require("./utils/cell");

// const grid = new GridOperations(3, 3);
// // const address = new Address(1, 1);
// const game = new GameOfLife(grid);
// game.tick();
let address = new Address(0, 0);
let address1 = new Address(0, 1);
let address2 = new Address(0, 2);
let address3 = new Address(1, 0);
const cell = new DeadCell(address);
const neighbors = [
    new AliveCell(address1),
    new AliveCell(address2),
    new AliveCell(address3),
];
const state = cell.updateState(neighbors);
const nextCell = state
    ? new AliveCell(cell.address)
    : new DeadCell(cell.address);
console.log(nextCell instanceof AliveCell, true);
console.log(nextCell.address, address);
