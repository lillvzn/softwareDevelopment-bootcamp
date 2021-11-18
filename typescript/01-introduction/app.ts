// union types
function combine(a: number | string, b: number | string) {
  let result;
  if (typeof a === "number" && typeof b === "number") {
    result = a + b;
  } else {
    result = a.toString() + b.toString();
  }
  return result;
}
const combineAges = combine(30, 23);
const combineNames = combine("Anna", "Jose");

// console.log(combineAges);
// console.log(combineNames);

// literal types
function combine1(
  a: number | string,
  b: number | string,
  resConvert: "a number" | "a text" // literal type
) {
  let result;
  if (
    (typeof a === "number" && typeof b === "number") ||
    resConvert == "a number"
  ) {
    result = +a + +b;
  } else {
    result = a.toString() + b.toString();
  }
  // if (resConvert === "a number") {
  //   return +result;
  // } else return result.toString();
  return result;
}
const combineAges1 = combine1(30, 23, "a number");
const combineStringAges = combine1("30", "30", "a number");
const combineNames1 = combine1("Anna", "Jose", "a text");

console.log(combineAges1);
console.log(combineStringAges);
console.log(combineNames1);
