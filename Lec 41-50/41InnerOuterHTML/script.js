console.log(document.getElementsByTagName("span")[0]);
// it return the html element correspond to it

console.dir(document.getElementsByTagName("span")[0]);
// it return object of that html element with its properties

// tag Name shows only valid html elements
// node Name shows all types of nodes in it
// element node text node comment node

console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);

console.log(document.getElementById("first").innerHTML)

// we can change the inner html by
document.getElementById("first").innerHTML = "<i>Ishan Garg</i>";
console.log(document.getElementById("first").innerHTML)

// diff between inner and outer html
// innerHTML show only the inner text in the div
// inner and outer only valid for html nodes
// outerHTML show the element also which contain the text

console.log(document.getElementById("first").outerHTML);
document.getElementById("first").outerHTML = "<span> <i> Shri Shivay Namastubhavam <i> </span>";

// to access the comment node and the text we can use like
let a = document.body.firstChild;
console.log(a);
// it is a text Nodes

console.log(a.data);
console.log(a.nodeValue);
// print data

// to change data
a.data = "Hello India";

console.log(document.body.textContent);
// show all text content
// as text copy kar sakte hoo

// hidden to hide something in html
// can be shown .hidden = false;
// <p hidden>
//document.getElementsByTagName("p").hidden = false;



