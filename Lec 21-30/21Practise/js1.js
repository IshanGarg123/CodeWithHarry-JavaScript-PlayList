// problems

// problem1
const prompt = require("prompt-sync")({ sigint: true });
let arr = [1,2,3,4,5,6,7,8];
let a = prompt("enter the number");
a = parseInt(a);
arr.push(a);
console.log(arr);

// problem2
let b = prompt("enter the number");
b = parseInt(b);
while(b!==0){
    arr.push(b);
    b = prompt("enter the number");
    b = parseInt(b);
}

console.log(arr);

// problem3
let arr1 = arr.filter((element)=>{
    return (element%10===0);
})

console.log(arr1);

// problem 4

let arr2 = arr.map((element)=>{
    return (element*element);
})
console.log(arr2);

// problem 5

let arr3 = [1,2,3,4,5,6,7,8,9];
let ans = arr3.reduce((a,b)=>{
    return a*b;
})
console.log(ans);

