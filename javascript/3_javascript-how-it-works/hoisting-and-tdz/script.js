// TDZ - temporal dead zone

"use strict";

console.log(hello);
// returns undefined
console.log(world);
// Cannot access 'world' before initialization
console.log(ha);
// Cannot access 'ha' before initialization
var hello = "It's me!!!";
let world = "Nah fam";
const ha = "Ayo!";

console.log(add);
// Cannot access 'add' before initialization
console.log(subtract(7, 90));
// returns -83
console.log(multiply(9, 10));
// Cannot access 'multiply' before initialization

const add = function (a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
}

const multiply = (a, b) => a * b;
