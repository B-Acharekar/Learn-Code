// let-const-vs-var.js

console.log("=== 🔁 var vs let/const – Scope Differences ===");

function scopeTest() {
  if (true) {
    var x = 1;        // function-scoped
    let y = 2;        // block-scoped
    const z = 3;      // block-scoped
  }

  console.log("var x:", x);    // ✅ Accessible (function scope)
  // console.log("let y:", y); // ❌ ReferenceError
  // console.log("const z:", z); // ❌ ReferenceError
}

scopeTest();

console.log("\n=== 🔄 var Hoisting ===");

console.log("Before declaration:", a); // undefined (hoisted)
var a = 10;

// let/const are hoisted too, but in Temporal Dead Zone (TDZ)
try {
  console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
  let b = 20;
} catch (err) {
  console.log("Error:", err.message);
}

console.log("\n=== ⛔ Block Scope Pitfall Example ===");

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 100);
}
// Output: var i: 3 (three times)

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 100);
}
// Output: let j: 0, 1, 2

console.log("\n=== 🧊 const Can't Be Reassigned ===");

const pi = 3.14;
// pi = 3.1415; ❌ TypeError: Assignment to constant variable

// But for objects/arrays, you can still mutate:
const person = { name: "Alice" };
person.name = "Bob"; // ✅ allowed
console.log("Mutated const object:", person);

const arr = [1, 2, 3];
arr.push(4); // ✅ allowed
console.log("Mutated const array:", arr);
