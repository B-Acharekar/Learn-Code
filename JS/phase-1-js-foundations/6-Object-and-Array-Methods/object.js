// objects.js

console.log("=== 🏗️ Creating Objects ===");

// Object literal
const user = {
  name: "Alice",
  age: 30,
  isMember: true
};

// Object constructor (rare in modern code)
const anotherUser = new Object();
anotherUser.name = "Bob";
anotherUser.age = 25;

console.log("user:", user);
console.log("anotherUser:", anotherUser);

console.log("\n=== 🔍 Accessing & Updating ===");

console.log(user.name);        // Dot notation → Alice
console.log(user["age"]);      // Bracket notation → 30

// Updating values
user.age = 31;
user["isMember"] = false;

console.log("Updated age:", user.age);
console.log("Updated membership:", user.isMember);

// Adding new property
user.email = "alice@example.com";

// Deleting a property
delete user.isMember;

console.log("After deletion:", user);

console.log("\n=== 📦 Dot vs Bracket Notation ===");

const key = "name";
console.log(user.key);       // undefined – looks for literal key "key"
console.log(user[key]);      // Alice – dynamic key access

console.log("\n=== 🧩 Object Destructuring ===");

const profile = {
  username: "coder123",
  location: "Earth",
  level: "Intermediate"
};

const { username, level } = profile;

console.log("Username:", username); // coder123
console.log("Level:", level);       // Intermediate

// Rename while destructuring
const { location: place } = profile;
console.log("Location (renamed):", place); // Earth

console.log("\n=== 🛠️ Object Methods ===");

const book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  getSummary() {
    return `${this.title} by ${this.author}`;
  }
};

console.log(book.getSummary()); // "The Alchemist by Paulo Coelho"

// You can also add methods dynamically
book.publish = function (year) {
  this.published = year;
  return `Published in ${year}`;
};

console.log(book.publish(1988));
console.log("Book:", book);
