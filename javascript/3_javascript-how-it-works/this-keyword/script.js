"use strict";

/*
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

*/
