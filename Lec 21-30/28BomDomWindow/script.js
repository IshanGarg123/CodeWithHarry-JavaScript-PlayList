console.log(window);
// it is global object
// it is a main object which contain the BOM DOM
// and some core js components

console.log(document.body);
// whole html page is consider as document
// it is called document object model

document.body.style.background = "Yellow";
// we can change properties using js on runtime
// eg when the user click or something 
// it can manipulate the css properties

// BOM  - Browser Object Model
// alert prompt confirm are part of BOM
// it is part of browser
// so it not run properly in nodejs environment
// it is used to change the url on run time

location.href = "https://www.google.com";
// when page load it redirect the page to google.com site
// it is a part of BOM



