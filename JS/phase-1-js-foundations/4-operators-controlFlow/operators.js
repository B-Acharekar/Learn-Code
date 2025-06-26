console.log("=== ➕ Arithmetic Operators ===");

let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000 → Exponentiation

console.log("\n=== 🔁 Comparison Operators ===");

console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 >= 5);   // true
console.log(5 <= 4);   // false
console.log(5 == "5"); // true → loose equality (coercion)
console.log(5 === "5");// false → strict equality
console.log(5 != "5"); // false
console.log(5 !== "5");// true

console.log("\n=== 🔁 Logical Operators ===");

const x = true;
const y = false;

console.log(x && y); // false
console.log(x || y); // true
console.log(!x);     // false

console.log("\n=== ⚡ Short-circuiting ===");

// AND (&&) short-circuits on falsy
console.log("AND:", 0 && "hello");     // 0
console.log("AND:", "hi" && "there");  // "there"

// OR (||) short-circuits on truthy
console.log("OR:", 0 || "fallback");   // "fallback"
console.log("OR:", "hi" || "bye");     // "hi"

console.log("\n=== ❓ Nullish Coalescing Operator (??) ===");

let name;
console.log(name ?? "Anonymous"); // "Anonymous"

let count = 0;
console.log(count ?? 10);         // 0 ✅
console.log(count || 10);         // 10 ❌ (0 is falsy)

console.log("\n=== 🎯 Ternary Operator ===");

let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote?", canVote); // "Yes"

let result = (a > b) ? "a is bigger" : "b is bigger";
console.log(result); // "a is bigger"