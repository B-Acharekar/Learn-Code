// scope-closures.js

console.log("=== 📦 Lexical Scope ===");

function outer() {
  const outerVar = "I'm outside!";
  
  function inner() {
    // inner function has access to outerVar
    console.log("Inner() calling outer()")
    console.log(outerVar); 
  }

  inner(); // prints: I'm outside!
}

outer();

console.log("\n=== 🔒 Closure Example ===");

// Closure = function "remembers" its outer variables
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log("Current count:", count);
  };
}

const counter1 = createCounter();
counter1(); // 1
counter1(); // 2

const counter2 = createCounter();
counter2(); // 1 (new independent scope)

console.log("\n=== 🌍 Closure in Real World: Button Click ===");

// Simulating a DOM button handler with closure
function setupButtonHandler(name) {
  return function () {
    console.log(`Hello, ${name}! You clicked the button.`);
  };
}

const clickHandler = setupButtonHandler("Alice");
clickHandler(); // Prints: Hello, Alice!

console.log("\n=== ⚡ IIFE: Immediately Invoked Function Expression ===");

// IIFE = function that runs as soon as it's defined
(function () {
  const secret = "🔐 Hidden in IIFE scope";
  console.log("Running IIFE. Secret:", secret);
})();

// secret is not accessible here:
// console.log(secret); ❌ ReferenceError

// IIFE with parameters
(function (user) {
  console.log(`Welcome, ${user}!`);
})("Charlie");
