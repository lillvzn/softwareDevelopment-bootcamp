"use strict";

const arra = [7, 8, 9];
const newArr = [1, 2, ...arra];
console.log(newArr);
console.log(...newArr);

const restaurantSpread = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },
  orderDelivery: function ({
    time = "20:00",
    address,
    mainIdx = 1,
    starterIdx = 1,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIdx]} and ${this.mainMenu[mainIdx]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}!`
    );
  },
};

const newMainMenu = [...restaurantSpread.mainMenu, "Gnocci", "Chinese Noodles"];
console.log(newMainMenu);

// Copy array and merging arrays
const mainMenuCopy = [...restaurantSpread.mainMenu];
const menuOp = [...mainMenuCopy, ...restaurantSpread.starterMenu];
console.log(menuOp);

// works on all iterables (strings, maps, sets)
const str = "Hello";
const letters = [...str, " ", "w"];
console.log(letters);

// const ingredients = [
//   prompt(`let's make pasta! Ingredient 1?`),
//   prompt(`let's make pasta! Ingredient 2?`),
//   prompt(`let's make pasta! Ingredient 3?`),
// ];
// console.log(ingredients);
// restaurantSpread.orderPasta(...ingredients);

// spread operator also works on objects (since 2018)

const newBranch = {
  ...restaurantSpread,
  founder: "Morden Mouse",
  established: "1956",
};
console.log(newBranch);

const restaurantSpreadCopy = { ...restaurantSpread };
restaurantSpreadCopy.name = "Roma Magnum";
console.log(restaurantSpreadCopy.name);
console.log(restaurantSpread.name);
