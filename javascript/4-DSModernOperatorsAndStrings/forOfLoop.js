"use strict";

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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}!`
    );
  },
  numGuests: 56,
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng, otherIng);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// regular for loop
// for (let i = 0; i < menu.length; i++) console.log(menu[i]);

// for-of loop
for (const item of menu) console.log(item);

// entries - array iterator (iterates over the array to form a new array with index and value at each new array)
// for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);
// destructure
for (const [i, item] of menu.entries()) console.log(`${i + 1}: ${item}`);
