class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // call Animal constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks. Breed: ${this.breed}`);
  }
}

const d = new Dog("Rex", "Labrador");
d.speak(); // Rex barks. Breed: Labrador
