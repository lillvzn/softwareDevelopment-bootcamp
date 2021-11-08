"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // simple array methods
// let arr = ["a", "b", "c", "d", "e"];

// // SLICE - no mutation
// console.log(arr.slice(3));
// console.log(arr.slice(1, 4));
// console.log(arr.slice(-3));
// console.log(arr.slice(1, -2));

// // SPLICE - mutates original array
// // console.log(arr.splice(3));
// console.log(arr.splice(2, 4));
// console.log(arr);

// // REVERSE - mutates original array
// const arr2 = [5, 4, 3, 2, 1];
// console.log(arr2.reverse());

// // CONCAT
// arr = ["a", "b", "c", "d", "e"];
// const concatList = arr.concat(arr2);
// // [...arr, ...arr2]
// console.log(concatList);

// // JOIN
// console.log(concatList.join(":"));

// -------- forEach loop --------
movements.forEach((el) =>
  el > 0
    ? console.log(`You deposited ${el}`)
    : console.log(`You withdrew ${Math.abs(el)}`)
);

movements.forEach((el, idx) =>
  el > 0
    ? console.log(`Movement ${idx + 1}: You deposited ${el}`)
    : console.log(`Movement ${idx + 1}: You withdrew ${el}`)
);

// -------- forEach with Maps and sets --------

// MAP
const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);

currencies.forEach(function (val, key, map) {
  console.log(`${key}: ${val}`);
});

// SET
const currenciesUnique = new Set([
  "USD",
  "GBP",
  "EUR",
  "AUD",
  "USD",
  "CAD",
  "EUR",
]);
currenciesUnique.forEach(function (val, _, map) {
  console.log(`${val}: ${val}`);
});

// Array methods
// Map, Filter, Reduce

// Map -> another method to loop over array (similar to forEach but creates a new array after applying operations to original arr)
// Filter -> to filter elements in original arr that satisfy conditions (creates new arr as well)
// Reduce -> reduces all arr elements to one single value (ex: adding of array numbers)

// MAP
const euroToUsd = 1.2;
const movementsInUSD = movements.map((el) => el * euroToUsd);
const movementsDesc = movements.map(
  (el, idx) =>
    `Movement ${idx + 1}: You ${el > 0 ? "deposited" : "withdrew"} ${Math.abs(
      el
    )}`
  // return el > 0
  //   ? `Movement ${idx + 1}: You deposited ${el}`
  //   : `Movement ${idx + 1}: You withdrew ${Math.abs(el)}`;
);
console.log(movementsDesc);

// FILTER
const deposits = movements.filter((el) => el > 0);
const withdrawals = movements.filter((el) => el < 0);

// REDUCE
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

// MAX VALUE
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
