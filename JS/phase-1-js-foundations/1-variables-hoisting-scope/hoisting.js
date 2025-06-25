// 1. Using 'var' – Hoisted & initialized with undefined
console.log(a); // undefined (not ReferenceError)
var a = 10;

// Internally behaves like:
// var a;
// console.log(a); // undefined
// a = 10;

// 2. Using 'let' or 'const' – Hoisted but in Temporal Dead Zone (TDZ)
try {
  console.log(b); // ReferenceError
} catch (e) {
  console.error("Accessing 'b' before declaration:", e.message);
}
let b = 20;

// 3. Function-scoped vs block-scoped hoisting
function testHoisting() {
  if (true) {
    var c = 30; // function-scoped
    let d = 40; // block-scoped
  }

  console.log(c); // ✅ 30
  try {
    console.log(d); // ❌ ReferenceError
  } catch (e) {
    console.error("Accessing 'd' outside block:", e.message);
  }
}
testHoisting()

//-----Function Hoisting -----
// 1. Function Declaration – Hoisted entirely
sayHello(); // ✅ Works

function sayHello() {
  console.log("Hello from a hoisted function!");
}

// 2. Function Expression (var) – Variable hoisted, not the function
try {
  greet(); // ❌ TypeError: greet is not a function
} catch (e) {
  console.error("Calling function expression before init:", e.message);
}
var greet = function () {
  console.log("Hi from a function expression");
};

// 3. Arrow Function (let/const) – Not hoisted at all
try {
  arrowGreet(); // ❌ ReferenceError
} catch (e) {
  console.error("Calling arrow function before init:", e.message);
}
const arrowGreet = () => {
  console.log("Hi from an arrow function");
};


// - Declarations are hoisted (var, function).
// - Initializations (assignments) are NOT hoisted.
// - let/const declarations are hoisted but in TDZ.
// - Function declarations are hoisted, function expressions are not.
// - Always declare variables at the top for clarity.