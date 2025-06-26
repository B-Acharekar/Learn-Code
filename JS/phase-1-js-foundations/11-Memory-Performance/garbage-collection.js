function createGarbage() {
  let bigData = new Array(1e6).fill("💾"); // 1 million entries
  console.log("Data created");
  console.log(bigData)
  // Big data becomes unreachable after this function ends
}

createGarbage();

// After a while, JS engine will collect the unused bigData
console.log("If memory is tight, GC may reclaim bigData soon.");
