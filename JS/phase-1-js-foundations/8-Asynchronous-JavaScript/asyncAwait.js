// asyncAwait.js

console.log("=== 🧩 Basic async/await ===");

function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("👤 User data loaded");
    }, 1000);
  });
}

async function loadUser() {
  console.log("⏳ Loading user...");
  const data = await fetchUserData(); // wait until promise resolves
  console.log("✅ Result:", data);
}

loadUser();


console.log("\n=== 🧩 await chaining ===");

function delayAdd(val, delay = 500) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`+${val}`);
      resolve(val);
    }, delay);
  });
}

async function addSequence() {
  const a = await delayAdd(1);
  const b = await delayAdd(a + 1);
  const c = await delayAdd(b + 1);
  console.log("🎉 Final Sum:", a + b + c);
}

addSequence();


console.log("\n=== 🧩 try/catch for errors ===");

function fetchWithError(shouldFail = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject("❌ Failed to fetch!");
      else resolve("✅ Success");
    }, 1000);
  });
}

async function runWithErrorHandling() {
  try {
    const result = await fetchWithError(true);
    console.log("Result:", result);
  } catch (err) {
    console.log("⚠️ Caught Error:", err);
  }
}

runWithErrorHandling();