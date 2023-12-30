// element have its children sibling parent
// eg
// <div1>
//        <div2>
//        </div2>
// </div1>
// div2 is the children of div1

// eg head and body are children of html tag
// head and body are siblings

console.log(document.body.firstChild);
// first child is text Node
// if we remove space than div is the first child
// of the body

console.log(document.body.lastChild);
// print the last child of the body

console.log(document.body.childNodes);
// print all child of the body

// childNodes[0] === firstChild
// childNodes[childNodes.length-1] === lastChild

console.log(document.body.hasChildNodes());
// return true if have childs
// return false if not have childs

// we can form arr of html elements
let arr = Array.from(document.body.childNodes);
console.log(arr);

// childNodes look like a array but it is not a array
// it is a collection of html tags
// we use Array.form to convert in into array

