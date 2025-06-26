// template-literals.js

console.log("=== 🧩 String Interpolation with ${} ===");

const name = "Alice";
const age = 25;

// Traditional concatenation
const oldWay = "Hello, my name is " + name + " and I'm " + age + " years old.";
console.log("Old way:", oldWay);

// Template literal
const newWay = `Hello, my name is ${name} and I'm ${age} years old.`;
console.log("Template literal:", newWay);

// Expressions inside ${}
const x = 10;
const y = 5;
console.log(`The sum of ${x} and ${y} is ${x + y}.`);

function greet(user) {
  return `Hi ${user}, welcome back!`;
}
console.log(greet("Bob"));

console.log("\n=== 📜 Multiline Strings ===");

// Traditional (using \n and ugly concatenation)
const oldMultiline = "Line 1\n" +
                     "Line 2\n" +
                     "Line 3";
console.log("Old multiline:\n", oldMultiline);

// Template literal: clean and readable
const multi = `
Line 1
Line 2
Line 3
`;
console.log("Template literal multiline:", multi);

console.log("\n=== 💡 Dynamic HTML Example ===");

const product = "Laptop";
const price = 999;

const htmlCard = `
  <div class="card">
    <h2>${product}</h2>
    <p>Price: $${price}</p>
  </div>
`;

console.log("Generated HTML:\n", htmlCard);
