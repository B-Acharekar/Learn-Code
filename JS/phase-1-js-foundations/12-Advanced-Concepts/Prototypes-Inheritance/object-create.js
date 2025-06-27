const vehicle = {
  move() {
    console.log("Moving...");
  }
};

const car = Object.create(vehicle);
car.brand = "Tesla";

car.move(); // ✅ inherited
console.log(car.__proto__ === vehicle); // true
