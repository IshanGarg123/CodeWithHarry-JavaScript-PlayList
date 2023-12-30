// older way
// insertion of html tags in the element
let a = document.getElementsByTagName("div")[0];
console.log(a);
// use to insert some html element to a element
a.innerHTML = a.innerHTML + "<h1> Hello world! </h1>";

// faster way
// create a div using js
let div = document.createElement('div');
div.innerHTML = "<h1> Hello world! </h1>";
a.appendChild(div);
// add this child to a element in html at its end
// it is fast than older way;

// a.append(div) = append at the last child

a.prepend(div);
// div is append at first child 
// or say at the top

a.before(div); 
// append div outside the element just above it

a.after(div)
// append div outside the element just below it

// replaceWith  = replace a element with another element
a.replaceWith(div);
