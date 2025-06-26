// callbacks.js

console.log("=== 🧩 Callback Functions ===");

// A callback is just a function passed to another function to be called later

function greetUser(name, callback) {
  console.log(`Hi, ${name}!`);
  callback(); // call the function passed as argument
}

function afterGreet() {
  console.log("Callback executed after greeting.");
}

greetUser("Alice", afterGreet);

// Another example: simulate async behavior with setTimeout
function fetchData(callback) {
  setTimeout(() => {
    console.log("📦 Data fetched!");
    callback("Here is your data");
  }, 1000);
}

fetchData((data) => {
  console.log("💬 Callback received:", data);
});


// 🔥 === Callback Hell Example ===

console.log("\n=== 🧨 Callback Hell ===");

function step1(data, callback) {
  setTimeout(() => {
    console.log("Step 1 done");
    callback(data + 1);
  }, 500);
}

function step2(data, callback) {
  setTimeout(() => {
    console.log("Step 2 done");
    callback(data + 2);
  }, 500);
}

function step3(data, callback) {
  setTimeout(() => {
    console.log("Step 3 done");
    callback(data + 3);
  }, 500);
}

// Nested callbacks = callback hell
step1(0, (result1) => {
  step2(result1, (result2) => {
    step3(result2, (finalResult) => {
      console.log("✅ Final result:", finalResult);
    });
  });
});
