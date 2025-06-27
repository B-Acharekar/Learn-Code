function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, I'm ${this.name}`);
};

const p1 = new Person("Alice");
p1.greet(); // Hello, I'm Alice
