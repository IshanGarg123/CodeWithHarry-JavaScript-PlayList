// DOM Access to change properies of a specific id,class or tag

let a = document.getElementsByClassName("p1");
// a is array of all html tags have id p1;
console.log(a);
a[0].style.background= "yellow";
a[1].style.fontSize = "x-large";
a[2].style.color = "red";
a[3].style.color = "green";
a[3].style.fontSize = "x-large";

// DOM refers to the Html page where it is a tree with nodes
// the nodes are 3 types
// 1 text nodes
// 2 element nodes
// 3 comment nodes

// the text nodes are consider as the leaf nodes
// it consider only text

console.log(document.title)
console.log(typeof(document.title));
console.log(document.documentElement)
// documentElement is the <html> tag;
console.log(typeof(document.documentElement));

// if document.body is written before body tag it give null
// when we write js at top of body tag


