"use strict";

/*
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
