// TDZ - temporal dead zone

"use strict";
/*
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


// <--------- this keyword ----------->

console.log(this); // window

const calcAge = function (year) {
  console.log(2054 - year);
  console.log(this); // undefined
};

calcAge(2022);

const calcAgeArrow = (year) => {
  console.log(2054 - year);
  console.log(this); // window (does't get it's own this, used this from it's parent scope - lexical this)
};

calcAgeArrow(2023);

const myName = {
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2054 - this.year); // points to object calling the method
  },
};
myName.calcAge();

const myNameTwo = {
  year: 2021,
};

myNameTwo.calcAge = myName.calcAge; // borrowing method
myNameTwo.calcAge(); // points this.year in object myNameTwo

const copyCalcAge = myName.calcAge;
console.log(copyCalcAge);
copyCalcAge(); // throws undefined as this doesn't point to year as year is not present



// <----------- Regular v Arrow function ------------->

const myName = {
  year: 1999,
  firstName: "Myself",
  calcAge: function () {
    // console.log(this);
    console.log(2054 - this.year); // points to object calling the method

    // pre ES6
    const self = this; // self or that
    const isMillenial = function () {
      console.log(self);
      console.log(1981 <= self.year <= 1996);
    };
    isMillenial();

    const isMillenialArrow = () => {
      console.log(this);
      console.log(1981 <= this.year <= 1996);
    };
    isMillenialArrow();
  },
  greet: () => console.log(`Hey! ${this.firstName}`),
};
myName.greet(); // undefined
myName.calcAge();



const addExpression = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpression(7, 9);
addExpression(7, 9, 10, 232);

const addExpr = (a, b) => {
  console.log(arguments);
  return a + b;
};
addExpr(5, 8); // arguments keyword won't work in arrow function (not important in modern days)

*/
