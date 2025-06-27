console.log("A");

async function asyncFunc() {
  console.log("B");
  await Promise.resolve();
  console.log("C");
}

asyncFunc();

console.log("D");
