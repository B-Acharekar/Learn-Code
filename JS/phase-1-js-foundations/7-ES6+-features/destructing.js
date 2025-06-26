// destructuring.js

console.log("=== 🧩 Object Destructuring ===");

const user = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
  location: {
    city: "Wonderland",
    zip: 12345
  }
};

// Traditional access
const username = user.name;
const city = user.location.city;

// Destructuring
const { name, age, email } = user;
console.log(name, age, email); // Alice 25 alice@example.com

// Renaming variables
const { name: fullName } = user;
console.log("Full name:", fullName); // Alice

// Nested destructuring
const { location: { city: userCity, zip } } = user;
console.log("City:", userCity); // Wonderland
console.log("ZIP:", zip); // 12345


console.log("\n=== 📦 Array Destructuring ===");

const nums = [10, 20, 30, 40];

// Traditional
const first = nums[0];
const second = nums[1];

// Destructuring
const [a, b, , d] = nums;
console.log("a:", a); // 10
console.log("b:", b); // 20
console.log("d (4th):", d); // 40

// Swapping variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log("Swapped:", x, y); // 2 1

// Skipping values
const [,, third] = nums;
console.log("third:", third); // 30


console.log("\n=== 🧩 Destructuring in Functions ===");

function printUser({ name, email }) {
  console.log(`${name}'s email is ${email}`);
}
printUser(user); // Alice's email is alice@example.com

function sum([a, b]) {
  return a + b;
}
console.log("Sum of first two:", sum([5, 10])); // 15
