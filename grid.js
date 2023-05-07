class Grid {
    #grid;

    constructor(rows, columns) {
        if (typeof rows !== "number" || rows <= 0 || columns <= 0) {
            throw new Error("Invalid row or colum value");
        }
        this.rows = rows;
        this.columns = columns;
        this.#grid = this.#createGrid(rows, columns);
    }

    #populate(rows, columns) {
        const grid = new Array(rows);
        for (let row = 0; row < rows; row++) {
            grid[row] = new Array(columns).fill(false);
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
                    grid[row][col] = true;
                }
            }
        }
        return grid;
    }

    cell(row, col) {
        if (this.#grid[row] && this.#grid[row][col]) {
            return this.#grid[row][col];
        } else {
            return false;
        }
    }
}

module.exports = { Grid };
