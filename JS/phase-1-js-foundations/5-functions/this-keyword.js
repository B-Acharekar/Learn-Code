// this-keyword.js

console.log("=== 🌍 Global Context ===");

console.log(this); // In browser: Window object. In Node: {} (empty object)

function globalFn() {
  console.log("Inside function:", this);
}

globalFn(); // In browser: still Window (non-strict), in strict mode: undefined

console.log("\n=== 🔄 this in Object Methods ===");

const user = {
  name: "Alice",
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

user.greet(); // "Hello, I'm Alice"

console.log("\n=== ⚡ Arrow Functions and this ===");

const profile = {
  name: "Luna",
  greet: function () {
    const arrowFn = () => {
      console.log(`Arrow this.name: ${this.name}`); // arrow inherits "this" from greet()
    };
    arrowFn();
  }
};

profile.greet(); // "Arrow this.name: Luna"

// Arrow function as method (DON'T DO THIS):
const wrong = {
  name: "Oops",
  greet: () => {
    console.log(this.name); // undefined (inherits global this)
  }
};

wrong.greet(); // undefined

console.log("\n=== 🎛 call(), apply(), bind() ===");

function introduce(city, hobby) {
  console.log(`${this.name} from ${city} likes ${hobby}`);
}

const person = { name: "Charlie" };

// call: pass arguments one-by-one
introduce.call(person, "New York", "chess");

// apply: pass arguments as array
introduce.apply(person, ["London", "coding"]);

// bind: returns a new function
const boundIntro = introduce.bind(person, "Berlin", "painting");
boundIntro(); // Charlie from Berlin likes painting
