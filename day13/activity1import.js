// import add2Nums from "./task1export.js";
const { add2Nums, objPerson } = require("./activity1export.js");

console.log(add2Nums(5, 4));

console.log(
  `First Name: ${objPerson.fName}\nLast Name: ${objPerson.lName}\nFull Name: ${objPerson.printName()}`,
);
