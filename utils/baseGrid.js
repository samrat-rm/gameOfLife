const Address = require("./address");

class BaseGrid {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.grid = this.createGrid();
    }

    createGrid() {
        const grid = [];
        for (let row = 0; row < this.rows; row++) {
            const gridRow = [];
            for (let col = 0; col < this.cols; col++) {
                const address = new Address(row, col);
                gridRow.push(this.createCell(address));
            }
            grid.push(gridRow);
        }
        return grid;
    }

    getCell(row, col) {
        if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) {
            return this.grid[row][col];
        } else {
            return null;
        }
    }

    createCell(address) {
        throw new Error("Not implemented");
    }
}

module.exports = BaseGrid;
