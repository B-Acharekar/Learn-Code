// loops.js

console.log("=== 🔁 for Loop ===");

for (let i = 1; i <= 5; i++) {
  console.log("Step:", i);
}

console.log("\n=== 🔁 while Loop ===");

let count = 0;
while (count < 3) {
  console.log("Count is:", count);
  count++;
}

console.log("\n=== 🔁 do...while Loop ===");

let num = 0;
do {
  console.log("Num is:", num);
  num++;
} while (num < 2);

console.log("\n=== 🔁 break and continue ===");

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping 3");
    continue; // Skip iteration
  }
  if (i === 5) {
    console.log("Breaking at 5");
    break; // Exit loop
  }
  console.log(i);
}

console.log("\n=== 🔄 for...in vs for...of ===");

const arr = ["a", "b", "c"];

// for...in → keys (indexes for arrays)
for (let index in arr) {
  console.log("Index:", index, "Value:", arr[index]);
}

// for...of → values
for (let value of arr) {
  console.log("Value:", value);
}

console.log("\n=== 🔄 Looping over objects ===");

const user = {
  name: "Alice",
  age: 30,
  city: "Wonderland"
};

// for...in with object
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

// for...of → won't work directly on objects (throws error)
// Object.entries, Object.keys, Object.values
console.log("\nUsing Object.entries:");
for (let [key, value] of Object.entries(user)) {
  console.log(`${key} = ${value}`);
}

console.log("\nUsing Object.keys:");
Object.keys(user).forEach(key => {
  console.log(`${key}: ${user[key]}`);
});

console.log("\nUsing Object.values:");
for (let val of Object.values(user)) {
  console.log("Value:", val);
}
