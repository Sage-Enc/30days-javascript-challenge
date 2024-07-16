// Activity-4

// Task-1

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log('\n')
// Task-2

let tabNum = 5;
for (let i = 0; i <= 10; i++) {
  console.log(tabNum + " * " + i + " = " + tabNum * i);
}

console.log('\n')
// Activity-2
console.log("\n");
// Task-3

let numSum = 0;
while (numSum <= 10) {
  numSum += numSum;
  numSum++;
}
console.log(numSum);

console.log('\n')
// Task-4

let num = 10;
while (num > 0) {
  console.log(num);
  num--;
}
console.log('\n')

// Activity-3
console.log("\n");
// Task-5

num = 1;
do {
  console.log(num);
  num++;
} while (num != 5);


console.log('\n')
// Task-6

let num1 = 10;
let numFact = 1;
let x = 1;
do {
  numFact *= x;
  x++;
} while (x < num1);

console.log(numFact);

// Activity-4
console.log("\n");
// Task-7
num = 5;
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log("\n");
}

// Activity-5
console.log("\n");
// Task-8
for (let i = 1; i <= 10; i++) {
  if (i == 5) continue;
  else console.log(i);
}

console.log("\n");
// Task-9
for (let i = 1; i <= 10; i++) {
  if (i == 7) break;
  else console.log(i);
}
