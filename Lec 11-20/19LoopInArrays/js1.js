// loops on arrays

let num = [2,45,67,88,23,467];

// for loop
for(let i=0;i<num.length;i++)
{
    console.log(num[i]);
}

// for each loop 
// takes a function to be applied on all elements
// it not return anything
num.forEach((element)=>{
    console.log(element*element);
});
 
// as we have html collection
// we convert into array
// Array.from() convert html collection into array
// example
 //let a = document.getElementsByClassName("ishan");
 // now a is html collection
 //console.log(a);
 // undefined
// Array.from(a)
// convert html collection into arrays;
// now we can apply forEach methord on it

let name = "Ishan";
let arr = Array.from(name);
// Array is made of something string,html etc;
console.log(arr);
// string into array

// for of loop
// to excess the values
for(let i of name)
{
    console.log(i);
}

//for in loop
//to excess the index

for(let i in name)
{
    console.log(i);
}