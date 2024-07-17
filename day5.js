// Activity-1

// Task-1
let num = 5
function numEveOdd(num){
  if(num%2==0)  return `Even`;
  else return `Odd`;
}

console.log(num, "is an", numEveOdd(num), "Number")

console.log('\n');

// Task-2

function numSquare(num){
  return num**2;
}

console.log("Square of", num, "is", numSquare(num));

console.log('\n');

// Activity-2

// Task-3

let num1 = 10, num2=6;

function findMax(num1, num2){
  if(num1>num2) return num1;
  else return num2;
}

console.log("Maximum of", num1, "and", num2, "is", findMax(num1, num2));

console.log('\n');

// Task-4

let str1 = "Hello", str2 = "World";

function concatStr(str1, str2){
  return str1 + " " + str2;
}

console.log(concatStr(str1, str2));

console.log('\n');

// Activity-3

// Task-5

const twoSum = (num1,num2) =>{
  return num+num2;
}

console.log(`Sume of ${num1} and ${num2} is ${twoSum(num1, num2)}`)

console.log('\n');

// Task-6

let str = "Hello World", char = 'W';

const findChar = (str, char) =>{
  return str.includes(char);
}

console.log(`The String ${str} contains ${char}? ${findChar(str, char)}`);

console.log('\n');

// Activity-4

// Task-7

const twoProd = (num1, num2=6) =>{
  return num1*num2;
}

console.log(`Product of ${num1} and ${num2} is ${twoProd(num1)}`);

console.log('\n');

// Task-8

let name = "Sage", age = 23;

const greet = (name, age=20) =>{
  return `Hello ${name}. Happy ${age}th Birthday`;
}

console.log(greet(name, age));

console.log('\n');

// Activity-5

// Task-9

function innerFunc(num){
  return `Hello World!!! x ${num}`;
}

function highFunc(func, num){
  for(let i=1; i<=num; i++){
    console.log(func(i));
  }
}

highFunc(innerFunc, 5);

console.log('\n');

// Task-10

const callBackFunc1 = (val) =>{
  return val**2;
}

const callBackFunc2 = (callFunc) =>{
  return (callFunc**2)*10;
}

const higherOrderFunc = (func1, func2, val) =>{
  return func2(func1(val));
}

console.log(higherOrderFunc(callBackFunc1, callBackFunc2, 5));