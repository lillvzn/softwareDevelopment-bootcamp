"use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: C++", "3: Ruby", "4: Rust"],
  answers: new Array(5).fill(0),
  registerNewAnswer(tryAgain = "Hi there!") {
    const inputNum = Number(
      prompt(
        `${tryAgain}\n${this.question}\n${this.options.join(
          "\r\n"
        )}\n(Write option number)`
      )
    );
    if (typeof inputNum === "number" && inputNum < this.options.length)
      this.answers[inputNum] += 1;
    else this.registerNewAnswer("Please try again!");
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") console.log(this.answers);
    else if (type === "string")
      console.log(`Poll results are ${this.answers.join(", ")}`);
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
