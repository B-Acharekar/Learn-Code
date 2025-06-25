console.log(a); // undefined

var a = 5;

//console.log(b); //ReferenceError: Cannot access 'b' before initialization
let b = 10;

//1. Accessing let and const Before Declaration
function gtg() {
  console.log(x); //ReferenceError
  let x = 3;
}
gtg();

//2. Block Scope and TDZ
{
  console.log(y); // ReferenceError
  const y = 7;
}

//3. Variables Declared After a Condition
if (true) {
    console.log(z); // ReferenceError
    let z = 9;
}

//4. No Temporal Dead Zone with var
{
    console.log(a); // undefined
    var a = 5;
}