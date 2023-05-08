class DeadCell {
    constructor(address) {
        this.address = address;
        this.state = false;
    }

    updateState(neighbors) {
        const aliveNeighbors = neighbors.filter((cell) => cell.state).length;

        if (aliveNeighbors === 3) {
            return true;
        }
        return this.state;
    }
}

module.exports = DeadCell;
