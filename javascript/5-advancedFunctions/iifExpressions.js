"use strict";

// immediately invoked function expressions (a function that only runs once)
(function () {
  // encapsulated as well
  console.log("This only runs once");
})();

(() => console.log("Same for arrow functions, run just once"))();
