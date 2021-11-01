"use strict";

const secureBooking = function () {
  // cannot create manually
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

// a function always has access to the variable env of the execution context inwhich it was created even after that execution context is gone
// variable env attached to the function, exactly as it was at the time and place the function was created -> closure

// console.dir(booker); // inspect VE

// More examples

// ------------------------------ 1
let f;
const g = function () {
  const a = 25;
  f = function () {
    console.log(a ** 2);
  };
};

const h = function () {
  const b = 56;
  f = function () {
    console.log(b ** 2);
  };
};
g();
f();
h();
f();

// ------------------------------ 2
const boardPassengers = function (passengersNum, wait) {
  const perGroup = passengersNum / 3; // priority 1
  setTimeout(function () {
    // executed independantly
    console.log(`We are now boading all ${passengersNum} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 2000);
  console.log(`Will start boarding in ${wait} seconds`);
};
const perGroup = 21; // priority 2
boardPassengers(270, 3);
