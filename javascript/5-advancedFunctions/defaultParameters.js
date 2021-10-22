"use strict";

const bookings = [];
const createBooking = function (
  flightNum,
  numOfPassengers = 1,
  price = 199 * numOfPassengers
) {
  const booking = {
    flightNum,
    numOfPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("AC134");
createBooking("RF440", 14, 1800);
createBooking("PO138", undefined, 900);
