// spread-rest.js

console.log("=== 🧩 Spread (...) ===");

// Spread in arrays
const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5];
console.log("moreNums:", moreNums); // [1, 2, 3, 4, 5]

// Copying arrays
const copy = [...nums];
copy.push(99);
console.log("Original:", nums); // [1, 2, 3]
console.log("Copy:", copy);     // [1, 2, 3, 99]

// Spread in objects
const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 26, email: "alice@example.com" };
console.log("Updated user:", updatedUser);

// Merging objects
const defaults = { theme: "dark", language: "en" };
const settings = { language: "fr" };
const finalConfig = { ...defaults, ...settings };
console.log("Merged config:", finalConfig); // language: "fr"

console.log("\n=== 🌀 Rest (...) ===");

// Rest in function parameters
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}
console.log("sum(1, 2, 3):", sum(1, 2, 3)); // 6

// Rest in array destructuring
const [first, ...rest] = [10, 20, 30, 40];
console.log("First:", first); // 10
console.log("Rest:", rest);   // [20, 30, 40]

// Rest in object destructuring
const person = {
  id: 101,
  name: "Bob",
  role: "admin"
};
const { id, ...otherInfo } = person;
console.log("id:", id); // 101
console.log("otherInfo:", otherInfo); // { name, role }
