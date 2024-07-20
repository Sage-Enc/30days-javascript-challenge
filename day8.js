// Activity-1

// Task-1

let pName="Sage", age=23;
console.log(`Person Name: ${pName} \nPerson's Age: ${age}`);

console.log("\n");

// Task-2

let multiString = `HTML
CSS
JavaScript
Nodejs
Expressjs
MongoDB
Reactjs`;
console.log(multiString);

console.log("\n");

// Assignment-2

// Task-3

let numArr = [5,2,8,4,6];
let [num1, num2] = numArr;
console.log(num1, num2);

console.log("\n");

// Task-4

let bookObj = {title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937};
let {title, author} = bookObj;
console.log(`Title: ${title} \nAuthor: ${author}`);

console.log("\n");

// Activity-3

// Task-5

let newNumArr = [...numArr, 0,1,3,7,9];
console.log("\n");

// Task-6

function sumUp(...args){
  let sum = 0;
  for(let i=0; i<args.length; i++){
    sum +=args[i];
  }
  return sum;
}
console.log(sumUp(newNumArr));

console.log("\n");

// Activity-4

// Task-7

function product(first, second=1){
  return first*second;
}

console.log(product(5,4));
console.log(product(5));

console.log("\n");

// Actiity-5

// Task-8

let aNum = 5, bNum = 6;
const minNum = function(){
  if(this.aNum<this.bNum) return this.aNum;
  else return this.bNum;
};
const maxNum = function(){
  if(this.aNum>this.bNum) return this.aNum;
  else return this.bNum;
}

const numObject = {aNum, bNum, minNum, maxNum};
console.log(numObject);

console.log("\n");

// Task-9

let prop1 = "name", prop2="age", prop3="country";
const enObject = {[prop1]: "Sage", [prop2]: 23, [prop3]: "India"};
console.log(enObject);