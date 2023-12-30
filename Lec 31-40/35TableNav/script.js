// their is a good way to traverse a table in html
// using DOM with some builtin functions

let a = document.body.firstElementChild.firstElementChild;
console.log(a);

// to access row of tables
console.log(a.rows);

// to access caption of table
console.log(a.caption);

// to access thead in a table
console.log(a.tHead);

// to access tFoot in a table
console.log(a.tFoot);

// it is 1st row
console.log(a.tHead.firstElementChild);

// a.rows[0] is a row
console.log(a.rows[0]);

// to access a row Index
console.log(a.rows[0].rowIndex);
console.log(a.rows[2].rowIndex);

console.log(typeof(window));
console.log(typeof(document));
// the both object type



