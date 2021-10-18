"use strict";

// <--------- this keyword ----------->

console.log(this); // window

const calAge = function (year) {
  console.log(2054 - year);
  console.log(this); // undefined
};

calAge(2022);

const calcAgeArrow = (year) => {
  console.log(2054 - year);
  console.log(this); // window (does't get it's own this, used this from it's parent scope - lexical this)
};

calcAgeArrow(2023);

const someName = {
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2054 - this.year); // points to object calling the method
  },
};
someName.calcAge();

const someNameTwo = {
  year: 2021,
};

someNameTwo.calcAge = someName.calcAge; // borrowing method
someNameTwo.calcAge(); // points this.year in object someNameTwo

const copyCalcAge = someName.calcAge;
console.log(copyCalcAge);
copyCalcAge(); // throws undefined as this doesn't point to year as year is not present
