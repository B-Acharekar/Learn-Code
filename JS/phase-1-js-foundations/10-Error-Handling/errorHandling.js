document.getElementById("run").addEventListener("click", () => {
  console.clear();
  alert("🧪 Starting error handling demo...");

  try {
    let age = prompt("Enter your age:");
    if (!age) throw new Error("No input provided!");
    if (isNaN(age)) throw new TypeError("Age must be a number.");
    if (age < 0) throw new RangeError("Age cannot be negative.");

    alert(`✅ You entered age: ${age}`);
  } catch (err) {
    alert(`❌ Error caught: ${err.name}\n${err.message}`); // use \n for line break
    console.error("Caught error:", err); // log full error in console
  } finally {
    alert("🔚 Finished running try/catch block.");
  }
});
