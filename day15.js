// Activity-1

// Task-1

function outer() {
  let name = "SAGE";
  function inner() {
    return name;
  }
  return inner;
}
// let result = outer()();
let result = outer();
console.log(result());

// Task-2

function counter() {
  let count = 0;
  return {
    incrementCount() {
      ++count;
    },
    getCount() {
      return count;
    },
  };
}

let counter1 = counter();
counter1.incrementCount();
counter1.incrementCount();
counter1.incrementCount();
console.log(counter1.getCount());

console.log("\n");

// Activity-2

// Task-3

function userID() {
  let id = 0;
  return {
    generateID: function () {
      ++id;
    },
    getID: function () {
      return id;
    },
  };
}

const user1 = userID();
user1.generateID();
user1.generateID();
user1.generateID();
console.log(user1.getID());

// Task-4

function user(name) {
  function greetUser() {
    return `Hello, ${name}`;
  }
  return greetUser;
}

const user2 = user("Rutveek");
console.log(user2());

console.log("\n");

// Activity-3

// Task-5

let functions = [];

for (let i = 1; i < 6; i++) {
  functions.push(
    (function (index) {
      return function () {
        console.log(index);
      };
    })(i),
  );
}
functions[4]();

// Activity-4

// Task-6

function createItemManager() {
  let items = [];
  return {
    addItem(item) {
      items.push(item);
      console.log(`${item} added.`);
    },

    removeItem(item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(`${item} removed.`);
      } else {
        console.log(`${item} not found.`);
      }
    },

    listItems() {
      console.log("Items:", items);
    },
  };
}

const itemManager = createItemManager();

itemManager.addItem("HTML");
itemManager.addItem("CSS");
itemManager.listItems();
itemManager.removeItem("HTML");
itemManager.listItems();
itemManager.removeItem("CSS");

console.log("\n");

// Activity-4

// Task-7

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

function multiply(num) {
  return num * num;
}

const memoizedFunction = memoize(multiply);

console.log(memoizedFunction(5));
console.log(memoizedFunction(5));
console.log(memoizedFunction(10));
console.log(memoizedFunction(10));

// Task-8
function memoizeFact(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

function factorial(num) {
  let fact = 1;
  for(let i=1;i<=num;i++){
    fact *=i;
  }
  return fact;
  return num * num;
}

const memoizedFactFunction = memoizeFact(factorial);
console.log(memoizedFactFunction(5))