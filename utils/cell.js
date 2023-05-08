const Address = require("./address");

class Cell {
    constructor(address, state) {
        if (!(address instanceof Address) || typeof state !== "boolean") {
            throw new Error("Invalid parameters for Cell class");
        }
        this.address = address;
        this.state = state;
    }

    updateState(neighbors) {
        throw new Error("Not implemented");
    }
}

module.exports = Cell;
