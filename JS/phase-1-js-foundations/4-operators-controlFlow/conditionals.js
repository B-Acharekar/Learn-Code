// conditionals.js

console.log("=== 🔁 if / else / else if ===");

let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

console.log("\n=== 🧭 switch Statement ===");

const fruit = "mango";

switch (fruit) {
  case "apple":
    console.log("Apples are $1 each.");
    break;
  case "banana":
    console.log("Bananas are $0.50 each.");
    break;
  case "mango":
    console.log("Mangoes are $2 each.");
    break;
  default:
    console.log("Sorry, we don’t have that fruit.");
    break;
}

console.log("\n=== ❓ Optional Chaining (?.) ===");

const user = {
  name: "Alice",
  contact: {
    email: "alice@example.com",
  },
};

// Safe access using optional chaining
console.log(user?.name); // "Alice"
console.log(user?.contact?.email); // "alice@example.com"
console.log(user?.address?.city); // undefined (no error)

// Without optional chaining (would cause error):
// console.log(user.address.city); // ❌ TypeError

// Optional call (when method might not exist)
const logger = {
  log: () => console.log("Logging..."),
};
logger.log?.(); // ✅ works
const brokenLogger = {};
brokenLogger.log?.(); // ✅ does nothing
