class Cell {
    constructor(row, col, state) {
        this.state = state;
        this.row = row;
        this.col = col;
    }

    #countNeighbour(grid) {
        let count = 0;
        const rows = grid.length;
        const columns = grid[0].length;
        // 9 times
        for (let r = this.row - 1; r <= this.row + 1; r++) {
            for (let c = this.col - 1; c <= this.col + 1; c++) {
                if (r >= 0 && c >= 0 && r < rows && c < columns) {
                    if (grid[r][c].state) {
                        count++;
                    }
                }
            }
        }
        // -1 because we inclued the central grid.
        if (grid[this.row][this.col].state) {
            count--;
        }
        return count;
    }

    updateState(grid) {
        const count = this.#countNeighbour(grid);
        // console.log(this.row, this.col, grid[this.row][this.col].state, count);
        if (grid[this.row][this.col].state) {
            if (count === 2 || count === 3) {
                return true;
            } else {
                return false;
            }
        } else {
            if (count === 3) {
                return true;
            }
        }
        return this.state;
    }
}

module.exports = { Cell };
