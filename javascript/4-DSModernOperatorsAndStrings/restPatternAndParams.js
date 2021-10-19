"use strict";

// spread (right side of =)
const arr = [1, 2, 3, ...[4, 5]];

// <--------- Destructuring ----------->
// rest (left side of =)
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7];
console.log(a, b, others);

const restaurant = {
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
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng, otherIng);
  },
};

// can only be 1 rest in destructuring
const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFoods);

// for objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// <--------- Functions ----------->
// rest parameters
const add = function (...num) {
  console.log(num);
  let result = 0;
  for (let i = 0; i < num.length; i++) result += num[i];
  console.log(result);
};
add(2, 3);

const x = [23, 55, 7];
add(...x);

restaurant.orderPizza("Dough", "Onions", "Spinach", "Chicken", "Chillies");
// returns Onion as mainIngerediant, next all will be otherIngrediants
