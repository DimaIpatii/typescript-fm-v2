"use strict";
exports.__esModule = true;
var mocha_1 = require("mocha");
var chai_1 = require("chai");
var indexExports = require("../src/index");
mocha_1.describe("index.ts module", function () {
    mocha_1.it("should have a Dict export (type or interface)", function () {
        chai_1.expect(indexExports.Dict).to.eq(undefined);
        var x = {};
    });
    mocha_1.it("should have a mapDict export (function)", function () {
        chai_1.expect(!!indexExports.mapDict).to.eq(true, "export exists");
        chai_1.expect(typeof indexExports.mapDict).to.eq("function", "it is a function");
    });
    mocha_1.it("should have a reduceDict export (function)", function () {
        chai_1.expect(!!indexExports.reduceDict).to.eq(true, "export exists");
        chai_1.expect(typeof indexExports.reduceDict).to.eq("function", "it is a function");
    });
});
mocha_1.describe("Dict type", function () {
    mocha_1.it("(compile) should be able to hold a dictionary of string[]", function () {
        var x = {
            abc: ["def"],
            ghi: ["jkl", "mno"]
        };
    });
});
mocha_1.describe("mapDict", function () {
    mocha_1.it("should receive two arguments", function () {
        chai_1.expect(indexExports.mapDict.length).to.eq(2);
    });
    mocha_1.it("should return a dictionary", function () {
        chai_1.expect(indexExports.mapDict({ abc: 4 }, function (x) { return x; })).to.deep.eq({ abc: 4 });
    });
    mocha_1.it("should use the second argument (fn) to transform each value", function () {
        chai_1.expect(indexExports.mapDict({ abc: 4 }, function (x) { return "" + x; })).to.deep.eq({
            abc: "4"
        });
    });
    mocha_1.it("should not invoke the transform function for undefined values", function () {
        var invokeCount = 0;
        chai_1.expect(indexExports.mapDict({ abc: 4, def: undefined }, function (x) {
            invokeCount++;
            return "" + x;
        })).to.deep.include({
            abc: "4"
        });
        chai_1.expect(invokeCount).to.eq(1);
    });
});
mocha_1.describe("reduceDict", function () {
    mocha_1.it("should receive three arguments", function () {
        chai_1.expect(indexExports.reduceDict.length).to.eq(3);
    });
    mocha_1.it("should use the second argument (fn) as a reducera, and third argument as initial value", function () {
        chai_1.expect(indexExports.reduceDict({ abc: 4, def: 3, ghi: 19 }, function (x, sum) { return sum + x; }, 0)).to.eq(26);
    });
});
