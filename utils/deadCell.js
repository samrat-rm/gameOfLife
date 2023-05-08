const Cell = require("./cell");

class DeadCell extends Cell {
    constructor(address) {
        super(address, false);
    }

    updateState(neighbors) {
        const aliveNeighbors = neighbors.filter((cell) => cell.state).length;

        if (aliveNeighbors === 3) {
            return true;
        }
        return this.state;
    }
}

module.exports = DeadCell;
