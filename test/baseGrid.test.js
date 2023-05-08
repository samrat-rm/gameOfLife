const BaseGrid = require("../utils/baseGrid");
const Address = require("../utils/address");

class TestGrid extends BaseGrid {
    createCell(address) {
        return { address };
    }
}

describe("BaseGrid", () => {
    it("should be instantiated with the correct number of rows and columns", () => {
        const grid = new TestGrid(2, 3);
        expect(grid.rows).toEqual(2);
        expect(grid.cols).toEqual(3);
        expect(grid.grid.length).toEqual(2);
        expect(grid.grid[0].length).toEqual(3);
    });

    it("should return the correct cell for a given row and column", () => {
        const grid = new TestGrid(2, 3);
        expect(grid.getCell(0, 0).address).toEqual(new Address(0, 0));
        expect(grid.getCell(1, 2).address).toEqual(new Address(1, 2));
    });

    it("should return null if an out-of-bounds cell is requested", () => {
        const grid = new TestGrid(2, 3);
        expect(grid.getCell(-1, 0)).toBeNull();
        expect(grid.getCell(2, 2)).toBeNull();
    });
});
