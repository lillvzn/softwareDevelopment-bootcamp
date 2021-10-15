"use strict";

function calcAge(birthYear) {
  const age = 2026 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName}, you are ${age} years old, born in ${birthYear}`;
    console.log(output);

    if (1981 <= birthYear <= 1996) {
      const firstName = "New name";
      const str = `You are a millenial, ${firstName}!`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      add(7, 9);
    }
    output = "NEW OUTPUT";
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = "Julia";
calcAge(1985);
