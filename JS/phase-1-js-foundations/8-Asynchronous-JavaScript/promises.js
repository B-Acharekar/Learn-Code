// promises.js

console.log("=== 🧩 Creating a Promise ===");

function fetchData(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("📦 Data fetched successfully!");
      } else {
        reject("❌ Failed to fetch data.");
      }
    }, 1000);
  });
}

// Using .then and .catch
fetchData()
  .then((data) => {
    console.log("✅ Then block:", data);
  })
  .catch((error) => {
    console.log("🚨 Catch block:", error);
  });


console.log("\n=== 🧩 Promise Chaining ===");

function step1(value) {
  return new Promise((resolve) => {
    console.log("Step 1");
    resolve(value + 1);
  });
}

function step2(value) {
  return new Promise((resolve) => {
    console.log("Step 2");
    resolve(value + 2);
  });
}

function step3(value) {
  return new Promise((resolve) => {
    console.log("Step 3");
    resolve(value + 3);
  });
}

// Chain steps
step1(0)
  .then(step2)
  .then(step3)
  .then((final) => {
    console.log("🎉 Final result:", final); // 6
  });


console.log("\n=== 🧩 Error Handling in Chaining ===");

function riskyStep(value) {
  return new Promise((resolve, reject) => {
    if (value > 2) {
      reject("🚫 Value too high!");
    } else {
      resolve(value + 1);
    }
  });
}

riskyStep(1)
  .then(riskyStep)
  .then(riskyStep)
  .catch((err) => {
    console.log("⚠️ Caught Error:", err);
  });
