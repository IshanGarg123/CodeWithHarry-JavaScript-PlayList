// Array Methords

let num = [1,2,3,4,5,6,7,8,9,0];
let b = num.toString();
console.log(b);
// print the Array like the string with ',';

// JOIN Methord is a imp methord
// to convert array into string with our choise
// of what inbetween the number
// eg it can be ""," ","-" etc;

let c = num.join("");
console.log(c);

let d = num.join(" ");
console.log(d);

let e = num.join("-");
console.log(e);

// join all elements of array with given seperator

console.log(typeof(d));
console.log(typeof(c));

// pop fun
// remove and return last element of the array
let f = num.pop();
console.log(num);
console.log(f);

//push return new array length
let g = num.push(100);
console.log(num);
console.log(g);

//shift function
// remove first element and return it 
let h = num.shift();
console.log(num);
console.log(h);

// unshift function
// add new element in start of the array
// return length of array
let i = num.unshift(-100);
console.log(num);
console.log(i);

