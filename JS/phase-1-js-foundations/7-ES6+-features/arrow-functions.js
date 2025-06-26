// arrow-functions.js

console.log("=== 🧪 Basic Syntax ===");

// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function (with return)
const addArrow = (a, b) => {
  return a + b;
};

// Arrow function (implicit return)
const addShort = (a, b) => a + b;

console.log("add(2,3):", add(2, 3));
console.log("addArrow(2,3):", addArrow(2, 3));
console.log("addShort(2,3):", addShort(2, 3));

// One param, no parentheses
const square = x => x * x;
console.log("square(4):", square(4));

// No params
const greet = () => console.log("Hello!");
greet();

console.log("\n=== 🧠 Use Cases ===");

// 1. In callbacks (cleaner syntax)
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log("Doubled:", doubled);

// 2. Short utility functions
const isEven = n => n % 2 === 0;
console.log("isEven(4):", isEven(4));

console.log("\n=== 🔄 Arrow Functions and 'this' ===");

console.log("Regular function in object:");
const user1 = {
  name: "Alice",
  sayHi: function () {
    console.log("Hi from", this.name); // ✅ works
  }
};
user1.sayHi();

console.log("Arrow function in object:");
const user2 = {
  name: "Bob",
  sayHi: () => {
    console.log("Hi from", this.name); // ❌ 'this' is not user2
  }
};
user2.sayHi();

console.log("\n=== 💡 Real 'this' binding example (setTimeout) ===");

function Person(name) {
  this.name = name;

  // regular function (loses 'this')
  setTimeout(function () {
    console.log("Hello from (regular):", this.name); // ❌ undefined
  }, 500);

  // arrow function (keeps 'this')
  setTimeout(() => {
    console.log("Hello from (arrow):", this.name); // ✅ works
  }, 1000);
}

new Person("Charlie");
