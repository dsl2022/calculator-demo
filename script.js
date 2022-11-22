let result = 0;
const numArr = [];
// HTML
// container with id

// JS
// TODO
// init state
// number 1 - 9, buttons.AC button, +/-, %, (+ - * / =)

// functions for all operations.
// add, sub, mul, div. equal, percentage, negative.
// ac and c

const display = document.querySelector("#display");
display.textContent = result;
display.style.color = "white";
display.style.fontSize = "4rem";

const add = document.querySelector(".add");
add.addEventListener("click", () => {
  numArr.push("+");
  console.log({ numArr });
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {});

const oneKey = document.querySelector(".one");
oneKey.addEventListener("click", () => {
  numArr.push(1);
  console.log({ numArr });
});

const twoKey = document.querySelector(".two");
twoKey.addEventListener("click", () => {
  numArr.push(2);
  console.log({ numArr });
});

const threeKey = document.querySelector(".three");
threeKey.addEventListener("click", () => {
  console.log("working");
});

function addition(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  a / b;
}
