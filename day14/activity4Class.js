// Activity-4

// Task-7

class Person {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }

  get fullName() {
    return `${this.fName} ${this.lName}`;
  }

  // Task-8
  set fullName(fullName) {
    const [fName, lName] = fullName.split(" ");
    this.fName = fName;
    this.lName = lName;
  }

  greet() {
    console.log(`Hello, my name is ${this.fName} ${this.lName}`);
  }
}

const pOne = new Person("Rutveek", "Mohurle");

console.log(pOne.fullName);

pOne.fullName = "Sage Phoenix";

console.log(pOne.fullName);
