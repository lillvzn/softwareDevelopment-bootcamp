"use strict";

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

lufthansa.book(573, "Paul Parsons");
lufthansa.book(978, "Charles Darwin");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
// book(24, "Sarah John"); // won't work

// -------- CALL METHOD --------
book.call(eurowings, 23, "Sarah Ashley"); // allows to explicitly set this keyword
console.log(eurowings);

book.call(lufthansa, 42, "John Smith");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Airlines",
  iataCode: "EW",
  bookings: [],
};
book.call(swiss, 67, "Jonas Cooper");
console.log(swiss);

// -------- APPLY METHOD -------- (not so used in modern days)
const flightData = [583, "George Mason"];
book.apply(swiss, flightData);
// instead use...
book.call(swiss, ...flightData);
console.log(swiss);
