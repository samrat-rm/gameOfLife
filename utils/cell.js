class Cell {
    constructor(address, state) {
        this.address = address;
        this.state = state;
    }

    getState() {
        return this.state;
    }

    updateState(neighbors) {
        let state = this.state;
        const aliveNeighbors = neighbors.filter((cell) =>
            cell.getState()
        ).length;
        if (state && (aliveNeighbors < 2 || aliveNeighbors > 3)) {
            state = false;
        } else if (!this.state && aliveNeighbors === 3) {
            state = true;
        }
        return state;
    }

    getAddress() {
        return this.address;
    }
}

module.exports = Cell;
