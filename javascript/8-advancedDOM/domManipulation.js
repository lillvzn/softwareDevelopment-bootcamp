"use strict";

// to get entire html
console.log(document.documentElement);

// head
console.log(document.head);

// body
console.log(document.body);

// select single element
const header = document.querySelector(".header");

// select all elements
const allSections = document.querySelectorAll(".section");
console.log(allSections);

// element using id
console.log(document.getElementById("section--1"));

// element by class
console.log(document.getElementsByClassName("btn"));

// returns all buttons
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

// creating and inserting elements
// .insertAdjacentHTML

// create new element
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "Cookies used from improved functionality and analytics";
message.innerHTML =
  "Cookies can improve functionality and provide analytics. <button class='btn btn--close-cookie'>Got it!</button>";

// header.prepend(message); // top of html (viewport)
header.prepend(message); // bottom of html (viewport)
// header.append(message.cloneNode(true)); // get on top and bottom

// header.before(message); // display before header
// header.after(message); // display after header

// delete elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove(); // new method
    // message.parentElement.removeChild(message); // old method
  });
