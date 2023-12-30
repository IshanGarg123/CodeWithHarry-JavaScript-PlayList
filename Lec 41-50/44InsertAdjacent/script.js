let first = document.getElementById("first");
// insertAdjecentHTML
// use to insert html in a element
first.insertAdjacentHTML('beforeend',
'<div class="test"> BeforeEnd </div>');

// 2 parameters
// 1 - where to insert
// 2 - what to insert

// beforebegin - means at begin before element
// beforeend - means at end before element
// afterbegin - means at begin after element
// afterend - means at end after element

first.insertAdjacentHTML('beforebegin',
'<div class="test"> Beforebegin </div>');
first.insertAdjacentHTML('afterend',
'<div class="test"> afterend </div>');
first.insertAdjacentHTML('afterbegin',
'<div class="test"> afterbegin </div>');

// just inspect the code you know it

// how to remove an element in the html page
first.remove();
// it remove div with id first
