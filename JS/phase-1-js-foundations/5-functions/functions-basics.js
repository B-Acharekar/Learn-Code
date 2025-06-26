// functions-basics.js

console.log("=== 🔹 Function Declaration ===");

// Can be called before it's defined (hoisted)
greet("Alice");

function greet(name) {
  console.log(`Hello, ${name}!`);
}

console.log("\n=== 🔸 Function Expression ===");

// Not hoisted – must be defined before use
const sayBye = function(name) {
  console.log(`Goodbye, ${name}!`);
};

sayBye("Bob");

console.log("\n=== 🎯 Parameters vs Arguments ===");

function add(x, y) {
  // x, y → parameters (placeholders)
  console.log(`Sum of ${x} and ${y} is ${x + y}`);
}

add(5, 7); // 5, 7 → arguments (actual values)

console.log("\n=== 🔁 Return Values ===");

function square(n) {
  return n * n;
}

const result = square(4);
console.log("4 squared is", result); // 16

// You can also return early
function isEven(n) {
  if (n % 2 !== 0) return false;
  return true;
}

console.log("Is 3 even?", isEven(3)); // false

console.log("\n=== 🧩 Default Parameters ===");

function greetUser(name = "Guest") {
  console.log(`Welcome, ${name}!`);
}

greetUser();        // "Welcome, Guest!"
greetUser("Luna");  // "Welcome, Luna!"

// Example with multiple defaults
function multiply(a = 1, b = 1) {
  return a * b;
}

console.log("Default multiply:", multiply());       // 1
console.log("Multiply 3 x 4:", multiply(3, 4));     // 12

