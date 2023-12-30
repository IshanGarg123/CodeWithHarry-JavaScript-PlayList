// problem 1
console.log("har\"".length);

// problem 2
// includes() fun in js
let name1 = "ishan garg";
console.log(name1.includes("ishan"));

console.log(name1.startsWith("ish"));
console.log(name1.endsWith("garg"));

// problem 3
console.log(name1.toUpperCase());

// problem 4
let str = "please give Rs 1000";
let amount = Number.parseInt(str.slice(15));
console.log(amount);
console.log(typeof amount);

// problem 5
// you cant change the existing string .
//  as string in js are immutable.   
