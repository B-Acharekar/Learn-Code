// Object

const user = {
    name: "John",
    age: 22,
    isAdmin: false
}

console.log(typeof user);

// Array

const colors = ["red","green","blue"];
console.log(typeof colors);
console.log(Array.isArray(colors));

// Function
function greet(...args){
    return (`Hello ${args}`);
}

console.log(typeof greet)
console.log(greet("Joy"));