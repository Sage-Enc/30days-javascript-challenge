const greetMsg = document.getElementById("greetMsg");
const greetMsgClass = document.getElementsByClassName("greetMsgClass");

function changeMsg() {
  // Task-1
  greetMsg.innerHTML = "Hello Sage";
  // Task-2
  greetMsgClass[0].style.backgroundColor = "red";
}

// Task-3 & 4

function addList() {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = "I am New Div";
  document.body.appendChild(newDiv);

  const newList = document.createElement("li");
  newList.innerHTML = "Nextjs";
  document.getElementsByTagName("ul")[0].appendChild(newList);
}

// Task-5 & 6
function removeTwo() {
  const list = document.getElementsByTagName("ul")[0];
  list.removeChild(list.childNodes[2]);
}

function removeLast() {
  const list = document.getElementsByTagName("ul")[0];
  list.removeChild(list.lastChild);
}

// Task-7 & 8

function changeBullet() {
  const list = document.getElementsByTagName("ul")[0];
  list.setAttribute("style", "list-style-type: circle");
}

function removeBgColor() {
  const ele = document.getElementsByTagName("h1")[0];
  ele.style.backgroundColor = "white";
  ele.removeAttribute("class");
}

// Task-9 & 10

const changePara = document.getElementById("changePara");
changePara.addEventListener("click", () => {
  const para = document.getElementById("para");
  para.innerHTML = "I am changed";
});

const para = document.getElementById("para");
para.addEventListener("mouseover", () => {
  const parag = document.getElementById("para");
  parag.style.borderColor = "red";
});
