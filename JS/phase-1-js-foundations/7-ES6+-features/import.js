// Named imports
import { add, subtract } from './math/index.js';
console.log("Add:", add(2, 3)); // 5
console.log("Subtract:", subtract(5, 2)); // 3

// Default import
import user from './user/userInfo.js';
console.log("User:", user.name); // Alice
