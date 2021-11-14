"use strict";

// all numbers are represented as decimals

// convert string to num
console.log(Number("24"));
console.log(+"24");

// parsing - string needs to start with a number (e34 won't work)
console.log(Number.parseInt("30pxd", 10)); // 10 or 2 in case of specifing base
console.log(Number.parseFloat("2.4rem", 10));

console.log(Number.isNaN(20)); // returns false as 20 is a number
console.log(Number.isFinite(34)); // returns true as it's a finite number (better option to check if it's a number or not generally)
console.log(Number.isInteger(24)); // returns true as it's an iteger (false if float)

// Math and rounding
console.log(Math.sqrt(12)); // square root
console.log(Math.max(4, 234, 4, 2, 4313)); // Max
console.log(Math.min(123, 232, 24, 21, 2)); // Min
console.log(Math.PI * Number.parseFloat("10px") ** 2); // area of circle

// random num generate
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

// rounding integers
console.log(Math.trunc(23.544)); // returns 23
console.log(Math.round(23.544)); // returns 24 (nearest integer)
console.log(Math.ceil(23.544)); // returns 24
console.log(Math.floor(23.544)); // returns 23

// rounding decimals
console.log(+(23.544).toFixed(1)); // decimal to 1
