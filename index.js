// local modules
const { add, a } = require("./local-1");
const { add: add2, a: a2 } = require("./local-2");

console.log(a2);

// built-in-modules
const path = require("path");

// console.log(path.dirname("E:/Level2/Mission2/NodeJS1/local-2.js"));
// console.log(path.parse("E:/Level2/Mission2/NodeJS1/local-2.js"));
console.log(path.join("E:/Level2/Mission2/NodeJS1/", "local-2.js"));
