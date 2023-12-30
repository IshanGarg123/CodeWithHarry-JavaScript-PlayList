let first = document.getElementById("first");
let a = first.getAttribute("class");
console.log(a);
// it print value with respect to the following attribute
// it print hey  as hey is the class of first

console.log(first.hasAttribute("class"));
console.log(first.hasAttribute("style"));
// it return true or false
// true when the element contain that attribute 
// else it return false

//first.setAttribute("hidden","true");
// it set the attribute and its value to element

first.setAttribute("class","hlo hi");
// it set it 2 classes hlo and hi

// remove the attribute from the element
first.removeAttribute("class");

console.log(first.attributes);
// to get collection of all attributes of a given element

// custom attributes are made with using
// data-(attribute)
// eg data-game , data-player
// can be accessed by first.dataset.game;

console.log(first.dataset);
// it return all custom attributes start name with data-

console.log(first.dataset.game);
console.log(first.dataset.player);

// it return the value of the custom attribute





