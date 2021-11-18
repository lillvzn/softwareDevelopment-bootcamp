const person = {
  // better syntax
  name: "Jonas",
  age: 45,
};
const person1: {
  // type assignments
  name: string;
  age: number;
} = {
  name: "Julia",
  age: 21,
};
console.log(person.name);
console.log(person1.age);

// arrays
const person3 = {
  name: "Katy",
  age: 24,
  hobbies: ["Sports", "Video Games"],
};

let favActivities: string[];
favActivities = ["sports"];
// let favActivities: any[];
// favActivities = ["sports", 13];

for (const hobby of person3.hobbies) {
  console.log(hobby.toUpperCase()); // gives all available methods as typescript knows hobby is a string
}

// tuples are not present in javascript but in typescript
const person4: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Arther",
  age: 88,
  hobbies: ["TV", "Football"], // array
  role: [2, "author"], // tuple role: [number, string], push is accepted tho, but length is assigned
  // person4.role = [2, "author, "Janitor] // throws error because of length (tuple)
};

// enum
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
enum RoleTwo {
  ADMIN = 100,
  READ_ONLY = "READ-ONLY",
  AUTHOR = 23,
} // roles can be assigned with any values, but default is 0, 1, 2...

const person5 = {
  name: "James",
  age: 67,
  hobbies: ["Eat", "Baseball"],
  role: Role.ADMIN,
};

if (person5.role === Role.ADMIN) {
  console.log("The role is admin");
}

// any - flexible (can store any type) - kinda bad practice - use as a fallback
