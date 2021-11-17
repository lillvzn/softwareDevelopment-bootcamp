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

// reminding operator
const isEven = (num) => num % 2 === 0;
console.log(isEven(8));
console.log(isEven(19));

labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements_row")].forEach(function (row, idx) {
    if (idx % 2 === 0) row.getElementsByClassName.backgroundColor = "orange";
  });
});

// numeric seperators
const diameter = 287_279_707_692; // _ is a numeric seperator
console.log(diameter); // returns 287279707692
// can be used to help notice the meaning od a number (cents or thousands etc)

// BigInt (big integer)
console.log(2 ** 53 - 1); // biggest number JS can represent
console.log(Number.MAX_SAFE_INTEGER);

const bigNum = 43537343427634549853762545n; // creating big int
console.log(bigNum / 200);

// Exceptions of bigInt
console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(20n == "20"); // true
// cannot take sqrt of bigint
console.log(10n / 3n); // 3n
console.log(10 / 3); // 3.33333...

// Date and times (creating)
// dates
const now = new Date();
console.log(now); // current date

console.log(new Date("Aug 05 2021 19:10:56")); // parses date and time

console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 24, 46)); // year, month (0 based), date, hour, minute, second
console.log(new Date(0)); // UNIX time -> Jan 01 1970 1:00:00
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Jan 04 1970 1:00:00

// working with dates
const futureDate = new Date(2037, 10, 19, 15, 24, 46);
console.log(futureDate.getFullYear());
console.log(futureDate.getMonth());
console.log(futureDate.getDate());
console.log(futureDate.getDay());
console.log(futureDate.getHours());
console.log(futureDate.getMinutes());
console.log(futureDate.getSeconds());
console.log(futureDate.toISOString());
console.log(futureDate.getTime());

futureDate.setFullYear(2050); // sets the year, also setMonth, setDate etc

// operations with dates
const daysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
console.log(daysPassed(new Date(2045, 4, 15), new Date(2046, 11, 5)));

// Internationalizing numbers
const num = 2342343.234;
const options = {
  style: "unit",
  unit: "mile-per-hour",
};
console.log(new Intl.NumberFormat("en-US", options).format(num));

// setTimeout and setInterval
setTimeout(() => console.log("Pizza delivered"), 5000); // executes after 5 sec

const ingredients = ["olives", "chicken"];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Pizza delivered flavouring ${ing1} and ${ing2}`),
  5000,
  ...ingredients
); // executes after 5 sec
console.log("waiting..."); // executes before setTimeout func

if (ingredients.includes("olives")) clearTimeout(pizzaTimer); // clears the setTimeout func

// setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000); // executes every sec

// display running time
const options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
};
const displayTime = function (locale, options) {
  const now = new Date();
  console.log(new Intl.DateTimeFormat(locale, options).format(now));
};
setInterval(displayTime, 1000, "en-US", options);
