const Grid = require("./gridOperations");

class GameOfLife {
    #grid;

    constructor(grid) {
        if (!grid || !(grid instanceof Grid)) {
            throw new Error("Invalid grid ");
        }
        this.#grid = grid;
        this.#printCurrentGrid(this.#grid);
    }

    #printCurrentGrid(grid) {
        console.log("\n");
        const rows = grid.rows;
        const columns = grid.cols;
        let output = "";
        // printing  a output string
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < columns; col++) {
                output += grid.getCell(row, col).state ? " O " : " - ";
            }
            output += "\n";
        }
        // console.clear();
        console.log(output);
    }

    tick() {
        this.#grid.updateGrid();
        this.#printCurrentGrid(this.#grid);
        return this.#grid;
    }
}

module.exports = { GameOfLife };
