//A function creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions. For instance, the following is invalid:

// function exampleFunction() {
//   const x = "declared inside function"; // x can only be used in exampleFunction
//   console.log("Inside function");
//   console.log(x);
// }

// console.log(x); // Causes error

//However, the following code is valid due to the variable being declared outside the function, making it global:

const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}

console.log("Outside function");
console.log(x);


// Blocks only scope let and const declarations, but not var declarations.

{
  var y = 1;
}
console.log(y); // 1

//wrong;
//{
//   const y = 1;
// }
// console.log(y); // ReferenceError: x is not defined


