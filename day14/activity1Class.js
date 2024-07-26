// Activity-1

// Task-1

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet = () => {
    console.log(`Hello, ${this.name}.\nYour Age is ${this.age}.`);
  };

  // Task-2
  updateAge = (newAge) => {
    this.age = newAge;
    console.log(`Hello ${this.name}, Your Updated Age is ${this.age}.`);
  };

  static genericGreeting() {
    return "Hello, everyone!";
  }
}

const person1 = new Person("Rutveek", 24);
person1.greet();
person1.updateAge(23);

module.exports = Person;
