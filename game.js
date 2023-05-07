class GameOfLife {
    #grid;

    constructor(grid) {
        if (!grid || !grid instanceof Grid) {
            throw new Error("Invalid grid ");
        }
        this.#grid = grid;
        this.#printCurrentGrid(this.#grid);
    }

    #printCurrentGrid(grid) {
        console.log("\n");
        const rows = grid.rows;
        const columns = grid.columns;
        let output = "";
        // printing  a output string
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < columns; col++) {
                output += grid.cell(row, col) ? " O " : " - ";
            }
            output += "\n";
        }
        // console.clear();
        console.log(output);
    }

    tick() {
        this.#grid.updateGrid();
        this.#printCurrentGrid(this.#grid);
    }
}

module.exports = { GameOfLife };
