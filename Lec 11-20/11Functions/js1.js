// function is something to write a reusable code

let a = 1;
let b = 2;
let c = 3;

console.log(a+b);

function avg(a,b)
{
    console.log("Done");
    return Math.round((a+b)/2);
}

// Arrow functions
const sum = (a,b) =>{return a+b};
const Hello = () =>{console.log("Hello World")};
// Math.round() function

console.log(avg(a,b));
console.log(sum(a,b));
Hello();