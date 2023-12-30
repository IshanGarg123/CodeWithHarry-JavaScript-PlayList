// variable Hoisting
// hoisting refers to the process
// where the interpreter appears to move the declartion
// to the top of the code before execution
// var can be refered before declare in js


greet();
function greet()
{
    console.log("Good Morning");
}

// it runs successfully
// js only hoists the declartion not the initialization

console.log(a);
// a = undefinded // no error
//console.log(b);
// in case of let it give error
var a = 100;
let b = 100;

// in case of var the declaration will go to the top
// but not the initialization

// if we make function will expressions
// it can't be hoisted

// greet1();
// it give error
var greet1 =()=>{
    console.log("Good Morning");
}