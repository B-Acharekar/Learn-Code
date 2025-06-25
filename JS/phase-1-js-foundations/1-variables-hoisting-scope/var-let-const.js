//var - function-scoped
console.log("Var:"); 

//hoisting allowed
console.log(x); //o/p: undefined

var x = 1;

console.log(x);

if (x == 1) {
  var x = 2;

  console.log("Inside if: ",x);
}

console.log("Outside if: ",x);


//let - block-scoped
console.log("Let:"); 

//console.log(y); //o/p:ReferenceError: Cannot access 'y' before initialization 

let y = 1;
console.log(y);
if( y == 1) {
    let y = 2;
    console.log("Inside if: ",y);
}
console.log("Outside if: ",y);

//const - block-scoped
const z = 1;

try {
    z = 9;
} catch(err){
    console.log(err);
}

console.log(z);