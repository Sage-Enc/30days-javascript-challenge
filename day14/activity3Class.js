// Activity-3

// Task-5

const Person = require("./activity1Class");

const gGreeting = Person.genericGreeting();
console.log(gGreeting);

// Task-6

const Student = require("./activity2Class");

const stud1 = new Student("Rutveek", 24, "R1234");
const stud2 = new Student("Akshay", 28, "A1234");
const stud3 = new Student("Balraj", 23, "B1234");

console.log(`Total Student are ${Student.count}`);
