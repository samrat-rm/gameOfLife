const GridOperations = require("./utils/gridOperations");
const { GameOfLife } = require("./utils/game");
const AliveCell = require("./utils/aliveCell");
const DeadCell = require("./utils/deadCell");
const Address = require("./utils/address");
const Cell = require("./utils/cell");

const grid = new GridOperations(3, 3);
// // const address = new Address(1, 1);
// const game = new GameOfLife(grid);
// game.tick();

const testCellState = [
    DeadCell,
    AliveCell,
    DeadCell,

    DeadCell,
    AliveCell,
    DeadCell,

    DeadCell,
    AliveCell,
    DeadCell,
];

grid.grid = customGrid(testCellState, 3, 3);

function customGrid(cellState, rows, cols) {
    let ind = 0;
    let customGrid = [];
    for (let row = 0; row < rows; row++) {
        let gridRow = [];
        for (let col = 0; col < cols; col++) {
            let cellClass = cellState[ind];
            let address = new Address(row, col);
            gridRow.push(new cellClass(address));
            ind++;
        }
        customGrid.push(gridRow);
    }
    return customGrid;
}

console.log(grid.updateGrid());
