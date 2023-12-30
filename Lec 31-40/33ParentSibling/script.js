// $0 $1 when you inspect a website 
// and click on a line it is store in $0 var
// you can directly use it in the console
// $0 and $1 are consider as reference

// in DOM collection we can use for of loop to iterate through it
// if 2 siblings are their 
// they are consider as left and right siblings

console.log(document.head.nextElementSibling);
// to print its next sibling

console.log(document.body.firstChild);
let a = document.body.firstChild;
console.log(a.parentNode);
// it return anything that come first 
// means textNode etc
console.log(a.parentElement);
// it only return a valid html tag(element)

console.log(document.documentElement);
let b = document.documentElement;
console.log(b.parentNode);
// it return anything that come first 
// means textNode etc
// it return document

console.log(b.parentElement);
// it only return a valid html tag(element)
// it return NULL (as document is not a tag or element)

console.log(a.firstChild.nextElementSibling);

