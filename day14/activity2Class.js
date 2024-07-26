// Activity-2

// Task-3

const Person = require("./activity1Class");

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.count++;
  }

  printStudentId = () => {
    console.log(`Student Id: ${this.studentId}`);
  };

  // Task-4
  greet = () => {
    console.log(
      `Hello, ${this.name}.\nYour Age is ${this.age}.\nYour Student Id is ${this.studentId}.`,
    );
  };

  printStudentCount = () => {
    console.log(`Total Students: ${Student.count}`);
  };
}

Student.count = 0;

const student1 = new Student("Rutveek", 24, "A1234");
student1.printStudentId();
student1.greet();

module.exports = Student;
