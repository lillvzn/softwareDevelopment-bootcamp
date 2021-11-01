"use strict";

const flight = "LH256";
const russell = {
  name: "Russell Ash",
  passport: 235345645,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH789";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 235345645) alert("Check in");
  else alert("Wrong passport");
};
// checkIn(flight, russell);
// console.log(flight);
// console.log(russell);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(russell);
checkIn(flight, russell);
console.log(flight);
console.log(russell);

// js doesn't have passing by reference
