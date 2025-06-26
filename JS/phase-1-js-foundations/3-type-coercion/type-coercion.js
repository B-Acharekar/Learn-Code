console.log("=== 🔁 Implicit vs Explicit Type Conversion ===");

// 🔸 Implicit (Type Coercion)
console.log("5" + 1);      // '51' → number 1 coerced to string
console.log("5" - 1);      // 4   → string '5' coerced to number
console.log(true + 1);     // 2   → true coerced to 1
console.log(false + "1");  // 'false1' → boolean to string
console.log(null + 1);     // 1   → null coerced to 0
console.log(undefined + 1); // NaN

// 🔸 Explicit
console.log(Number("42"));     // 42
console.log(String(100));      // "100"
console.log(Boolean(""));      // false
console.log(Boolean("hello")); // true

console.log("\n=== 🔍 Truthy vs Falsy Values ===");

// 🔹 Falsy values (only 6 total)
const falsyValues = [false, 0, "", null, undefined, NaN];
falsyValues.forEach((val) => {
  if (val) {
    console.log("Truthy:", val);
  } else {
    console.log("Falsy:", val);
  }
});

// 🔹 Truthy examples
const truthyValues = [1, "0", "false", [], {}, function () {}];
truthyValues.forEach((val) => {
  if (val) {
    console.log("Truthy:", val);
  } else {
    console.log("Falsy:", val);
  }
});

console.log("\n=== ⚠️ Common Pitfalls ===");

console.log([] == false);      // true 😬 → [] coerced to ''
console.log('' == false);      // true → '' coerced to 0
console.log('0' == 0);         // true → '0' becomes 0
console.log(null == undefined); // true → only loosely equal
console.log(null === undefined); // false → strictly different
console.log([] == ![]);        // true 😵‍💫
console.log([0] == 0);         // true → [0] → '0' → 0
console.log([1, 2] == "1,2");  // true → coerces to string

// Best Practice:
console.log("Use strict equality (===) to avoid coercion bugs");
console.log([] === false);     // false ✅
console.log('0' === 0);        // false ✅
