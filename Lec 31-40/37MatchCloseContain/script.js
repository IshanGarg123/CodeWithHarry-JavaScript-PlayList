let id1 = document.getElementById("id1");
console.log(id1);

console.log(id1.matches(".class"))
// .matches return true or false
// if contain that id than true if not false;

console.log(id1.matches(".box"))
// if the id contain that class than true
// elememt matches with the given CSS selector

console.log(id1.matches("#id1"))
// it also true;

// closest function
let sp1 = document.getElementById("sp1");

console.log(sp1.closest(".box"));
// return the first ansestor which have the following 
// CSS selector

console.log(sp1.closest("#sp1"));
// it return itself;

// contain function
// it return the true or false
// if decendent conatin element true
// else false
// it take element not CSS selector

console.log(id1.contains(sp1));
console.log(id1.contains(id1));
console.log(sp1.contains(id1));



