// Destructuring and spread operator.
// Desturcturing means unpack value from array or object into variables.

let arr = [3, 5];

// traditional methord
// let a = arr[0];
// let b = arr[1];

// new methord
let [a, b] = arr;
console.log(a, b);

let arr1 = [1, 2, 3];
let [a1, b1] = arr1;
console.log(a1, b1);
// the value of a1=1 and b1=2;

let arr2 = [1, 2];
let [a2, b2, c2] = arr2;
console.log(a2, b2, c2);
// the value of c2 is undefined

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let [a3, b3, c3, d3, ...rest] = arr3;
// a3=1,b3=2,c3=3,d3=4;
// and rest are in rest array;
// ... it is a spread operator
console.log(rest);

let [a4, , , ...rest1] = arr3;
console.log(rest1);

// the rest array is
// [4, 5, 6, 7,8, 9, 0]
// a4 =1 than 2 space comma take 2 array index 1 and 2

// object destructuring
const obj = {e:"ishan",f:"3rd"}
const {e,f} = obj;
console.log(e,f);
// the var name and key value in the object should be same 
// else it give undefined


// spread operator
// converting an array into object
 let array=[1,2,3,4,5];
 let obj1 = {...array};
 console.log(obj1);
 // obj1 is object made up of array

 function sum(a,b,c,d,e)
 {
    return(a+b+c+d+e);
 }

 console.log(sum(...array));


let obj2 = {
    name:"Harry",
    company:"Company xyz",
    address:"XYZ"
}

console.log({...obj2,name:"John"});
// by this the value of key (name) will be get changed
// from "Harry" to "John";

console.log({...obj2,name:"John",company:"ABC"});
// in this the 2 values will be changed

console.log({name:"John",company:"ABC",...obj2});
// this will print the obj2 
// same to same 
// as the changes made are overwrite


