const {
    create,
    show,
  } = require("../src/purchases-controller.js");
 const inventory  = require("../data/inventory-data.json");

    describe("this will test create", () => {
        it("should check if value input to function is an object", ()=> {
            const input = "Air Force 1"
            const actual = typeof create(inventory,input);
            const expected = "object";
            expect(actual).toEqual(expected);
        });
    });

    describe("this will test show", () => {
        it("should show exactly 1 inventory object found by its unique Id", ()=> {
            const input = "-vF3";
            const actual = show(inventory,input);
            const expected = "-vF3 Air Jordan 1 743.00 true";
            expect(actual).toEqual(expected);
        });
    });