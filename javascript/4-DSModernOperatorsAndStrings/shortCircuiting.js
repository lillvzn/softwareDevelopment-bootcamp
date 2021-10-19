"use strict";

// OR Operators
// use any datatype
// return any datatype
// can do short circuiting (if 1st operand is truthy, others will not be evaluated)
console.log("------ OR Operator ------");
console.log(4 || "hello");
console.log("" || "hello");
console.log(0 || true);
console.log(undefined || null);
console.log(undefined || 0 || "" || "hello" || 235 || null);

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

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// short circuiting
const guests2 = restaurant.numGuests || 10; // won't work if the numGuests = 0
console.log(guests2);

// AND Operators
console.log("------ AND Operator ------");
// use any datatype
// return any datatype
// can do short circuiting (if 1st operand is falsy, others will not be evaluated)
// only true if all operands are true
console.log(0 && "hello");
console.log(80 && "helloo");
console.log(80 && "helloo");
console.log("hello" && 345 && null && "world"); // null is falsy value, hence it is returned

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "cheese");
}

// using shortcircuiting
restaurant.orderPizza && restaurant.orderPizza("chicken", "cheese");

// --------------- Nullish Coalescing Operator
console.log("------ Nullish coalescing ------");
// Nullish: null and undefined (not 0 or "")
restaurant.numGuests = 0;
const guestWithCoalescent = restaurant.numGuests ?? 10; // (if val = 0, ?? returns 0)
console.log(guestWithCoalescent);
