// problem 1
//const prompt = require("prompt-sync")({ sigint: true });

let age = prompt("enter you age");
age = parseInt(age);
if (age >= 18) {
  alert("you can drive");
} else {
  alert("you can't drive");
}

// problem 2
let a = confirm("Want to see age prompt again?");
if (a) {
  let age = prompt("enter you age");
  age = parseInt(age);
  if (age >= 18) {
    alert("you can drive");
  } else {
    alert("you can't drive");
  }
}

// problem 3
let age1 = prompt("enter you age");
age1 = parseInt(age1);

if (age1 < 0) {
  console.error("Age entered is Negative");
} else if (age < 18) {
  alert("You can't drive");
} else {
  alert("you can drive");
}

// problem 4
let num = prompt("enter the number");
num = parseInt(num);

/*if (num > 4) {
  location.href = "https://google.com";
}*/

// problem 5
let changeColor = (color) => {
  document.body.style.background = color;
};

switch (num) {
  case 1:
    changeColor("violet");
    break;
  case 2:
    changeColor("indigo");
    break;
  case 3:
    changeColor("blue");
    break;
  case 4:
    changeColor("green");
    break;
  case 5:
    changeColor("yellow");
    break;
  case 6:
    changeColor("orange");
    break;
  default:
    changeColor("red");
}

let color = prompt("enter the color name");
changeColor(color);
