// Implicit coercion

console.log("5" + 2);     // '52' (number → string)
console.log("5" - 2);     // 3   (string → number)
console.log(true + 1);    // 2   (true → 1)
console.log(false + "1"); // 'false1' (boolean → string)

// Explicit coercion

console.log(Number("123"));    // 123
console.log(Boolean(0));       // false
console.log(String(100));      // "100"

//Weird ones

console.log(null == undefined)// true (loose equality)
console.log(null === undefined) // false (strict equality)

//Quriky cases

console.log(typeof NaN); // number
console.log(NaN === NaN); // false
console.log([] + {});     // "[object Object]"
console.log({} + []);     // 0 in some contexts

Nan