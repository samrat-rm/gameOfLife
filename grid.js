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

    #countNeighbors(row, col) {
        const rows = this.rows;
        const columns = this.columns;
        let count = 0;
        // 9 times
        for (let r = row - 1; r <= row + 1; r++) {
            for (let c = col - 1; c <= col + 1; c++) {
                if (
                    r >= 0 &&
                    r < rows &&
                    c >= 0 &&
                    c < columns &&
                    this.cell(r, c)
                ) {
                    count++;
                }
            }
        }
        // -1 because we inclued the central grid.
        if (this.cell(row, col)) {
            count--;
        }
        return count;
    }

    updateGrid() {
        const rows = this.rows;
        const columns = this.columns;
        const newGrid = this.#populate(rows, columns);
        // Update each cell based on its neighbors
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < columns; col++) {
                const neighbors = this.#countNeighbors(row, col);
                if (this.cell(row, col)) {
                    if (neighbors === 2 || neighbors === 3) {
                        newGrid[row][col] = true;
                    }
                } else {
                    if (neighbors === 3) {
                        newGrid[row][col] = true;
                    }
                }
            }
        }

        this.#grid = newGrid;
        return newGrid;
    }

    cell(row, col) {
        if (this.#grid[row] && this.#grid[row][col]) {
            return this.#grid[row][col];
        } else {
            return false;
        }
    }

    setGrid(grid) {
        this.#grid = grid;
    }
}

module.exports = { Grid };
