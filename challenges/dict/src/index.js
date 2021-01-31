"use strict";
function arrayToDict(array) {
    const out = {};
    array.forEach(val => {
        out[val.id] = val;
    });
    return out;
}
const myDict = arrayToDict([
    { id: "a", value: "first", lisa: "Huang" },
    { id: "b", value: "second" }
]);

console.log(myDict);
//# sourceMappingURL=index.js.map