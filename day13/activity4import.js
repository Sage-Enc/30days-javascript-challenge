// Activity-4

const lod = require("lodash");
const axios = require("axios");

const array = [1, 2, 3, 4, 5, 6];
const chunkedArray = lod.chunk(array, 3);

console.log(chunkedArray);

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log("Data:", response.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
