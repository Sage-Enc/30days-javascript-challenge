// Activity-1

// Task-1

let arr1 = [1,2,3,4,5];

console.log(arr1);

console.log("\n")
// Task-2

let firstElm = arr1[0];
let lastElm = arr1[arr1.length-1];

console.log(firstElm, lastElm);

console.log("\n");

// Activity-2

// Task-3

arr1.push(6);
console.log(arr1);

console.log("\n");

// Task-4

arr1.pop();
console.log(arr1);

console.log(arr1);

// Task-5

arr1.shift();
console.log(arr1);

console.log("\n");

// Task-6

arr1.unshift(0);
console.log(arr1);

console.log("\n");

// Activity-3

// Task-7

let arr2x = arr1.map(ele=>{
  return ele*2;
});
console.log(arr2x);
console.log("\n");

// Task-8

let arr3x = arr1.filter(ele=> ele%2==0)
console.log(arr3x);

console.log("\n");

// Task-9

let arr4x = arr1.reduce((acc, ele)=> acc+ele);
console.log(arr4x);

console.log("\n");
// Activity-4

// Task-10
for(let i=0; i<arr1.length; i++){
  console.log(arr1[i]);
}

console.log("\n");

// Task-11

arr1.forEach(ele=>{
  console.log(ele);
})

console.log("\n");

// Activity-5

// Task-12
let arr2d = [[1,2,3],[4,5,6],[7,8,9]];
for(let i=0; i<arr2d.length; i++){
  console.log(arr2d[i]);
}

console.log("\n");

// Task-13
console.log(arr2d[1][1]);