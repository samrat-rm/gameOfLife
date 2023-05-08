const BaseGrid = require("../utils/baseGrid");
const Address = require("../utils/address");

class TestGrid extends BaseGrid {
    createCell(address) {
        return {
            address: address,
            state: false,
        };
    }
}

describe("BaseGrid", () => {
    describe("constructor", () => {
        it("should set the number of rows and columns and create the grid", () => {
            const grid = new TestGrid(3, 5);
            expect(grid.rows).toBe(3);
            expect(grid.cols).toBe(5);
            expect(grid.grid.length).toBe(3);
            expect(grid.grid[0].length).toBe(5);
            expect(grid.grid[0][0].address instanceof Address).toBe(true);
            expect(grid.grid[0][0].state).toBe(false);
        });
    });

    describe("getCell", () => {
        it("should return the cell at the specified row and column", () => {
            const grid = new TestGrid(3, 5);
            expect(grid.getCell(0, 0).address.getRow()).toBe(0);
            expect(grid.getCell(0, 0).address.getCol()).toBe(0);
            expect(grid.getCell(2, 4).address.getRow()).toBe(2);
            expect(grid.getCell(2, 4).address.getCol()).toBe(4);
            expect(grid.getCell(3, 5)).toBe(null);
            expect(grid.getCell(-1, -1)).toBe(null);
        });
    });

    // describe("createCell", () => {
    //     it("should throw an error because it is not implemented", () => {
    //         const grid = new BaseGrid(3, 5);
    //         expect(() => {
    //             grid.createCell(new Address(0, 0));
    //         }).toThrow("Not implemented");
    //     });
    // });
});
