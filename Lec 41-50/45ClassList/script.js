// in this we have made class
// with is some particular css properties in it
// it replace the class with the given one

let first = document.getElementById("first");
first.className = "yellow text-dark";
// ClassName use to change the classes of the element

console.log(first.classList);
// get list of all classes of a element

first.classList.remove("yellow");
// to remove class

first.classList.add("yellow");
// to add new class

// toogle methord
// nahi hai toh laga dega 
// hai toh remove kar dega

first.classList.toggle("yellow");
first.classList.toggle("yellow");

console.log(first.classList.contains("yellow"));
// return true or false
// true when it contain class
// false when it not contain class
