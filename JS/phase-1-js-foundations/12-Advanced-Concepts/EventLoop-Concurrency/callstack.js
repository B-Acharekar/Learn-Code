function one() {
  console.log("1️⃣ One");
  two();
}

function two() {
  console.log("2️⃣ Two");
  three();
}

function three() {
  console.log("3️⃣ Three");
}

one();
// Output:
// 1️⃣ One
// 2️⃣ Two
// 3️⃣ Three
