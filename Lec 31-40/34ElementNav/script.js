// element only navigation
// in this no text Node and no comment Nodes are considered
// only element Nodes are Considered

let a = document.body;
// it give first node
console.log("First child",a.firstChild);
// it give first element node
console.log("First Element child",a.firstElementChild);

// document.previousElementSibling
// document.nextElementSibling
// document.firstElementChild
// document.lastElementChild
// document.parentElement
// document.childElementNodes

// css manipulation using DOM
const changeBgRed = () =>{
    document.body.firstElementChild.style.background = "red";
}

console.log(document.body.children);
// it give all children of the body

