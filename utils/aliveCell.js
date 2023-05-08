class AliveCell {
    constructor(address) {
        this.address = address;
        this.state = true;
    }

    updateState(neighbors) {
        const aliveNeighbors = neighbors.filter((cell) => cell.state).length;

        if (aliveNeighbors < 2 || aliveNeighbors > 3) {
            return false;
        }
        return this.state;
    }
}

module.exports = AliveCell;
