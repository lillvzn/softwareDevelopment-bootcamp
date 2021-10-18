"use strict";

const restaurantArr = {
  name: "El Classico",
  loc: "New Mexico",
  categories: ["Mexican", "Italian", "Organic"],
  starters: ["Focaccia", "Garlic Bread", "Caprese Cheese Salad"],
  mains: ["Pasta", "Risotto", "Pizza"],

  order: function (startersIdx, mainsIdx) {
    return [this.starters[startersIdx], this.mains[mainsIdx]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// can also be done:

const [x, z, y] = arr; // destructuring assignment
console.log(x, y, z);

const [first, second] = restaurantArr.starters;
console.log(first, second);

const [first1, , third] = restaurantArr.starters; // skip elements in middle
console.log(first1, third);

let [main, secondary] = restaurantArr.categories;
// to rearrange categories ->
// old way
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// new way
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starters, mains] = restaurantArr.order(2, 1);
console.log(starters, mains);

// nested
const nested = [2, 4, [6, 16]];
const [firstEl, , thirdEl] = nested;
console.log(firstEl, thirdEl);

// to get items from inner array
const [i, , [j, k]] = nested; // nested destructuring
console.log(i, j, k);

// default values
const [ao = 1, bo = 1, co = 1] = [2, 8];
console.log(ao, bo, co);
