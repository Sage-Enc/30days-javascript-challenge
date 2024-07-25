// Activity-1

// Task-1

function add2Nums(num1, num2) {
  return num1 + num2;
}

// Task-2

const objPerson = {
  fName: "Rutveek",
  lName: "Mohurle",
  printName: () => {
    return `${objPerson.fName} ${objPerson.lName}`;
  },
};

module.exports = { add2Nums, objPerson };
