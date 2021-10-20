"use strict";

const weekDays = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
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
  openingHours,
  order(starterIdx, mainIdx) {
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

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// with optional chaining
console.log(restaurant.openingHours.mon?.open); // checks if a property exists, else returns undefined
console.log(restaurant.openingHours.Fri?.open); // returns 11 (property exist)

weekDays.forEach((day) => {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`We open @ ${open}`);
});

// optional chaining for methods
console.log(restaurant.order?.(0, 2) ?? `Method not exist`);
console.log(restaurant.orderSomething?.(0, 2) ?? `Method not exist`);

// for arrays
const names = [{ name: "Daemon", email: "hello@world.com" }];

console.log(names[0]?.name ?? "user array empty");

// ? -> optional chaining operator
// ?? -> nullish coalescence
