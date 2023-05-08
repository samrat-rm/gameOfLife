const Cell = require("./cell");
const BaseGrid = require("./baseGrid");

class GridOperations extends BaseGrid {
    createCell(address) {
        return new Cell(address, Math.random() < 0.5 ? true : false);
    }

    updateGrid() {
        const newGrid = [];
        for (let row = 0; row < this.rows; row++) {
            const newRow = [];
            for (let col = 0; col < this.cols; col++) {
                const cell = this.getCell(row, col);
                const address = cell.getAddress();
                const neighbors = this.getNeighbors(address);
                const state = cell.updateState(neighbors);
                newRow.push(new Cell(address, state));
            }
            newGrid.push(newRow);
        }
        this.grid = newGrid;
        return this.grid;
    }

    getNeighbors(address) {
        const { row, col } = address;
        const neighbors = [];
        for (let r = row - 1; r <= row + 1; r++) {
            for (let c = col - 1; c <= col + 1; c++) {
                if (
                    r >= 0 &&
                    r < this.rows &&
                    c >= 0 &&
                    c < this.cols &&
                    !(r === row && c === col)
                ) {
                    neighbors.push(this.getCell(r, c));
                }
            }
        }
        return neighbors;
    }
}

module.exports = GridOperations;
