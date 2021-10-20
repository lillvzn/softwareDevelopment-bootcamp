"use strict";

const weekDays = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]; // compute properties using template literals
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // openingHours: openingHours, // old way
  // ES6 enhanced object literals
  openingHours,
  order(starterIdx, mainIdx) {
    // doesn't have to declare property to a function
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },
  orderDelivery({ time = "20:00", address, mainIdx = 1, starterIdx = 1 }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIdx]} and ${this.mainMenu[mainIdx]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}!`
    );
  },
  numGuests: 56,
  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng, otherIng);
  },
};

console.log(restaurant);

// https://www.google.com
