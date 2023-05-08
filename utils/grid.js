const { Cell } = require("./cell");

class Grid {
    grid;

    constructor(rows, columns) {
        if (typeof rows !== "number" || rows <= 0 || columns <= 0) {
            throw new Error("Invalid row or colum value");
        }
        this.rows = rows;
        this.columns = columns;
        this.grid = this.#createGrid(rows, columns);
    }

    #populate(rows, columns) {
        const grid = [];
        for (let row = 0; row < rows; row++) {
            let gridRows = [];
            for (let col = 0; col < columns; col++) {
                const cell = new Cell(row, col, false);
                gridRows.push(cell);
            }
            grid.push(gridRows);
        }
        return grid;
    }

    #createGrid(rows, columns) {
        // Create an empty grid
        const grid = this.#populate(rows, columns);
        // Add random live cells
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < columns; col++) {
                if (Math.random() < 0.5) {
                    const cell = grid[row][col];
                    cell.state = true;
                }
            }
        }
        return grid;
    }

    updateGrid() {
        const rows = this.rows;
        const columns = this.columns;
        const newGrid = this.#populate(rows, columns);
        // Update each cell based on its neighbors
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < columns; col++) {
                const cell = this.grid[row][col];
                let state = cell.updateState(this.grid);
                newGrid[row][col] = new Cell(row, col, state);
            }
        }
        // console.log(newGrid);
        this.grid = newGrid;
        return newGrid;
    }

    cell(row, col) {
        if (this.grid[row] && this.grid[row][col]) {
            return this.grid[row][col];
        } else {
            return false;
        }
    }
}

module.exports = { Grid };
