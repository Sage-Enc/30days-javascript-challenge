// Activity-1

// Task-1
let num1 = 5;
function recursiveFactorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * recursiveFactorial(num - 1);
  }
}
console.log(recursiveFactorial(num1));

// Task-2

function recursiveFibonacci(num) {
  if (num <= 1) {
    return num;
  }
  return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
}
let num2 = 10;
for (let i = 0; i < num2; i++) {
  console.log(recursiveFibonacci(i));
}

console.log("\n");

// Activity-2

// Task-3

let arr1 = [1, 2, 3, 4, 5];
let arrSize = arr1.length;

function recursiveSum(arr, n) {
  if (n > 0) {
    return arr[n - 1] + recursiveSum(arr, n - 1);
  } else {
    return 0;
  }
}
console.log(recursiveSum(arr1, arrSize));
// console.log(recursiveSum(arr1, arrSize));

// Task-4

let arr2 = [4, 7, 3, 6, 1, 9, 5, 2, 8, 0];
let arrSize2 = arr2.length;
function recursiveMax(arr, n) {
  if (n === 1) {
    return arr[0];
  }

  return Math.max(arr[n - 1], recursiveMax(arr, n - 1));
}

console.log(recursiveMax(arr2, arrSize2));

console.log("\n");

// Activity-3

// Task-5

function reverseString(str) {
  if (str === "" || str.length === 1) {
    return str;
  }
  return reverseString(str.substring(1)) + str.charAt(0);
}
let str = "Hello World";
console.log(reverseString(str));

// Task-6

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  if (str.charAt(0) !== str.charAt(str.length - 1)) {
    return false;
  }
  return isPalindrome(str.substring(1, str.length - 1));
}

const str1 = "Nayan";

console.log(isPalindrome(str1));

console.log("\n");

// Activity-4

// Task-7

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  }
  if (target < arr[mid]) {
    return binarySearch(arr, target, left, mid - 1);
  }
  return binarySearch(arr, target, mid + 1, right);
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targets = [5, 1, 10, 3, 11];

targets.forEach((target) => {
  const index = binarySearch(sortedArray, target);
  console.log(`Target: ${target} | Index: ${index}`);
});

// Task-8

function countOccurrences(arr, target, index = 0) {
  if (index >= arr.length) {
    return 0;
  }
  const count = arr[index] === target ? 1 : 0;
  return count + countOccurrences(arr, target, index + 1);
}

const array1 = [1, 2, 3, 4, 2, 2, 5];
const array2 = [7, 7, 7, 7, 7, 7, 7];
const array3 = [1, 2, 3, 4, 5, 6, 7];
const array4 = [];

console.log(`Occurrences of 2 in array1: ${countOccurrences(array1, 2)}`);
console.log(`Occurrences of 7 in array2: ${countOccurrences(array2, 7)}`);
console.log(`Occurrences of 4 in array3: ${countOccurrences(array3, 4)}`);
console.log(`Occurrences of 1 in array4: ${countOccurrences(array4, 1)}`);
