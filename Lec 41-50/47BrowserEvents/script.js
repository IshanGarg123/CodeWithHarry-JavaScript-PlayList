// Browser Events
// if something happen in browser
// eg by our keyboard,mouse etc are called browser events
// eg click by mouse
// DOM nodes generate signal of the events happens
// some imp events
// mouse events
// keyboard events

let a = document.getElementsByClassName("container")[0];
a.onclick = () =>{
    let b=document.getElementsByClassName("container")[0];
    b.innerHTML = "Hello World!";
}
