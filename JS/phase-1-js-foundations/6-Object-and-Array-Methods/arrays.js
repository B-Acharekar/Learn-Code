// arrays.js

console.log("=== 📦 Create & Read (CRUD) ===");

const fruits = ["apple", "banana", "cherry"];
console.log("Initial:", fruits);

// Read
console.log("First fruit:", fruits[0]);

// Add (push, unshift)
fruits.push("orange");        // add to end
fruits.unshift("kiwi");       // add to start
console.log("After adding:", fruits);

// Update
fruits[1] = "mango";
console.log("After update:", fruits);

// Delete (pop, shift, splice)
fruits.pop();                 // remove last
fruits.shift();               // remove first
fruits.splice(1, 1);          // remove 1 item at index 1
console.log("After delete:", fruits);

console.log("\n=== 🛠️ Common Methods ===");

const nums = [1, 2, 3, 4, 5];

// map → transform each element
const doubled = nums.map(n => n * 2);
console.log("Doubled:", doubled);

// filter → keep some elements
const even = nums.filter(n => n % 2 === 0);
console.log("Even numbers:", even);

// reduce → combine into single value
const sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log("Sum:", sum);

// find → first match
const firstEven = nums.find(n => n % 2 === 0);
console.log("First even:", firstEven);

// some → at least one matches?
const hasLarge = nums.some(n => n > 4);
console.log("Any > 4?", hasLarge);

// every → all match?
const allPositive = nums.every(n => n > 0);
console.log("All > 0?", allPositive);

// includes → contains?
console.log("Includes 3?", nums.includes(3));

console.log("\n=== 🎯 Array Destructuring ===");

const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log("First two colors:", first, second);

// Skipping
const [,,third] = colors;
console.log("Third color:", third);

// Rest in destructuring
const [main, ...others] = colors;
console.log("Main:", main, "Others:", others);

console.log("\n=== 🌀 Spread & Rest ===");

// Spread – copy or merge arrays
const moreColors = [...colors, "yellow"];
console.log("Spread result:", moreColors);

// Merge arrays
const nums2 = [6, 7];
const merged = [...nums, ...nums2];
console.log("Merged:", merged);

// Rest – collect remaining args
function sumAll(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

console.log("Sum all:", sumAll(1, 2, 3, 4));
