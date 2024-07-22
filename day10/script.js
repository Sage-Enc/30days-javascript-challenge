// Activity-1

// Task-1

const para1 = document.getElementById("para1");
const changeParaButton = document.getElementById("changePara");

changeParaButton.addEventListener("click", () => {
  para1.innerHTML = "I Am Changed...";
});

// Task-2

const toggleImage = document.getElementById("toggleImage");
const gls = document.getElementById("gls");
toggleImage.addEventListener("dblclick", () => {
  if (gls.style.visibility == "visible") {
    gls.style.visibility = "hidden";
  } else {
    gls.style.visibility = "visible";
  }
});

// Activity-2

// Task-3 & 4

const div2 = document.getElementById("div2");
div2.addEventListener("mouseover", () => {
  div2.style.backgroundColor = "black";
  div2.style.color = "white";
});
div2.addEventListener("mouseout", () => {
  div2.style.backgroundColor = "white";
  div2.style.color = "black";
});

// Activity-3

// Task-5 & 6

const input1 = document.getElementById("input1");
const p2 = document.getElementById("p2");
input1.addEventListener("keydown", (e) => {
  console.log(e.key == " " ? "Space" : e.key);
});
input1.addEventListener("keyup", () => {
  p2.innerHTML = input1.value;
});

// Activity-4

// Task-7

const form1 = document.getElementById("form1");
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("input 1:", form1.elements.fip1.value);
  console.log("input 2:", form1.elements.fip2.value);
});

// Task-8

const selectTech = document.getElementById("selectTech");
const p3 = document.getElementById("p3");
selectTech.addEventListener("change", () => {
  p3.innerHTML = selectTech.value;
});

// Activity-5

// Task-9

const techList = document.getElementById("techList");
techList.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    console.log(e.target.textContent);
  }
});

// Task-10

const parent = document.getElementById("parent");
const addButtons = document.getElementById("addButtons");
parent.addEventListener("click", (e) => {
  e.target.tagName == "BUTTON" && alert("Button Clicked");
});
addButtons.addEventListener("click", () => {
  const newButton = document.createElement("button");
  newButton.textContent = "New Button";
  document.getElementById("parent").appendChild(newButton);
});
