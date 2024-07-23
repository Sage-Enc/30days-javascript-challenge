// Activity-1

// Task-1
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise One Resolved");
  }, 2000);
});

promiseOne.then(function () {
  console.log("Hello World");
});

console.log("\n");

// Task-2
const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) resolve("Promise Two Resolved");
    else reject("Something Went Wrong");
  }, 2000);
});

promiseTwo
  .then(() => console.log("No Error Occured..."))
  .catch(() => console.log("Error Occured..."));

// Activity-2

// Task-3
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let user = {
      fName: "Rutveek",
      lName: "Surname",
      uName: "SAGE",
    };
    if (user)
      resolve({
        fName: "Rutveek",
        lName: "Mohurle",
        uName: "SAGE",
        rollNo: 21,
      });
    else reject("Something Went Wrong");
  }, 5000);
});

promiseThree
  .then((data) => {
    console.log(data.fName, data.lName);
    return { uName: "SAGE", rollNo: 21 };
  })
  .then((data) => {
    console.log(data.uName);
    return { rollNo: 21 };
  })
  .then((data) => {
    console.log(data.rollNo);
    return data;
  })
  .catch();

console.log("\n");

// Activity-3

// Task-4
const asyncPromiseThree = async () => {
  try {
    let response = await promiseThree;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
asyncPromiseThree();

console.log("\n");

// Task-5
const asyncPromiseFour = async () => {
  try {
    let response = await promiseTwo;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

asyncPromiseFour();

console.log("\n");

// Activity-4

// Task-6

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log("Response 1", data))
  .catch((err) => console.log(err));

console.log("\n");

// Task-7

const promiseSix = async () => {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    console.log("Promise Six", data);
  } catch (err) {
    console.log(err);
  }
};

promiseSix();

console.log("\n");

// Activity-5

// Task-8

Promise.all([promiseOne, promiseTwo, promiseThree])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error);
  });

// Task-9

Promise.race([promiseOne, promiseTwo, promiseThree])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error);
  });
