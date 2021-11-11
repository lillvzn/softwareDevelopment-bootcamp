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

// Find method
movements.find((mov) => mov < 0); // returns first el in array that satisfies the condition
const account = accounts.find((acc) => acc.owner === "Jassica Davis");
console.log(account);

// some method
const anyDeposits = movements.some((mov) => mov > 0); // some value satisfying given condition (similar to includes (where no condition is needed))

// every method
const allDeposits = movements.every((mov) => mov > 0); // all values satisfying given condition

// separate callbacks
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// FLAT and FLATMAP
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arr.flat());

const arrDeep = [
  [1, [2, 3]],
  [4, 5, 6, [7, 8, [9]]],
];
console.log(arr.flat(3));

const totalBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .map((acc, mov) => acc + mov, 0);
console.log(totalBalance);

// flatmap
const altTotalBalance = accounts
  .flatMap((acc) => acc.movements)
  .map((acc, mov) => acc + mov, 0); // flatmap goes only 1 level deep

const owners = ["John", "Zach", "Adam", "Mary"];
console.log(owners.sort());

// for movements (num)
// Ascending
console.log(movements.sort((a, b) => a - b));
// Descending
console.log(movements.sort((a, b) => b - a));

// different array methods
const x = new Array(7); // computes an empty array of length 7
// x.fill(23);
// x.fill(23, 2) // fills x array with 23 startting from index 2
const someArr = [1, 2, 3, 4, 5, 6, 7];
// someArr.fill(45, 3, 6); // fills 45 from index 3 to 6
const y = new Array(7).fill(10);

const z = Array.from({ length: 7 }, () => 1); // similar to var y;
const a = Array.from({ length: 10 }, (_, i) => i + 1); // gives [1,2,3,4,5,6,7,8,9,10]

// Challenge
// 100 random dice roles
const dices = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("€", ""))
  );
  console.log(movementsUI);
  const movementsUI2 = [...document.querySelectorAll(".movements__value")];
});
