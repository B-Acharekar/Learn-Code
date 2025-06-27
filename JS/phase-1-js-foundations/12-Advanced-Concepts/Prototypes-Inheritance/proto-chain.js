const animal = {
  eats: true
};

const dog = {
  barks: true,
  __proto__: animal
};

console.log(dog.eats);  // ✅ true (from prototype)
console.log(dog.barks); // ✅ true
