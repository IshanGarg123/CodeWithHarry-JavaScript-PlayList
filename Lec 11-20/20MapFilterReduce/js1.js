// for each loop have 3 arguments in it
// value,index,array

// map take 3 arg
// value,index,array

// map create and return new array 
let arr = [45,21,23];
let a = arr.map((element,index,array)=>{
    console.log(element,index,array);
    return (element+1);
})
console.log(arr);
console.log(a);

// to return a modified array use map
// to perform operation on array use forEach loop

// Array filter methord
// return a new array with elements that we filter
// with returning a condition

let arr2 = [12,34,56,78,99];
let arr3 = arr2.filter((element)=>{
    return (element>50);
})

console.log(arr3);

// Array reduce methord
// return a value not a array;
let arr4 = [1,2,3,4,5,6,7,8];
let arr5 = arr4.reduce((h1,h2)=>{
    return h1+h2;
})
// it first add first 2 num of array
// than their sum with 3 and so on;
// until array finishes

console.log(arr5);


