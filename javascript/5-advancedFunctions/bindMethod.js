"use strict";

// bind doesn't immediately call the function

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a ticket with ${this.airline} on flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const swiss = {
  airline: "Swiss Airlines",
  iataCode: "SA",
  bookings: [],
};

const book = lufthansa.book;

// using bind instead of call/apply
const bookEW = book.bind(eurowings);
const bookSW = book.bind(swiss);
const bookLH = book.bind(lufthansa);

bookEW(167, "Steven Wells");
bookSW(45, "Micheal Magnum");
bookLH(67, "Mary Cooper");

const bookEW23 = book.bind(eurowings, 23); // default parameter: 23 for object eurowings
bookEW23("Carmen Cooper");
bookEW23("Sheldon Smith");

// with EventListeners
lufthansa.planes = 320;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application (preset parameters)
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // no this keyword in addTax function - rate preset to 0.23
console.log(addVAT(300));
console.log(addVAT(150));

// CHALLENGE
const addTaxFunc = (rate) => (value) => value + value * rate;
const addVAT2 = addTaxFunc(0.23);
console.log(addVAT2(300));
