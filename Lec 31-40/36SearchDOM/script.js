let a = document.getElementsByClassName("card-title");
console.log(a[0]);
a[0].style.color = "red";

// it can be access by id 
// id is unique of all elements;

let b = document.getElementById("ram");
b.style.color = "yellow";

// css selector to select them
// id class etc
// examples
// let a = document.querySelectorAll("#card-title");
// let b = document.querySelectorAll(".card-title");
// etc

let c = document.querySelectorAll(".card-title");
c[0].style.color = "red";
c[1].style.color = "blue";
c[2].style.color = "green";

// let b = document.querySelector(".card-title");
// to select only first class come

console.log(document.getElementsByTagName("a"));

// classes inside classes

console.log(document.querySelector(".card").getElementsByTagName("a"));

// document.getElementsbyName();
// name is given proprty in tag
// eq <div name="ishan">
// document.getElementsbyName("ishan");
