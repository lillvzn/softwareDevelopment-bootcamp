"use strict";

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
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
};

restaurant.orderDelivery({
  time: "22:20",
  address: "Via Del Monte",
  mainIdx: 2,
  starterIdx: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// giving new variable names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// setting default values
const { menu = [], starterMenu: startersObj = [] } = restaurant;
console.log(menu, startersObj);

// mutating variables
let a1 = 111;
let b1 = 999;
const obj = { a1: 25, b1: 68, c1: 108 };
({ a1, b1 } = obj);
console.log(a1, b1);

// nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
