let num = [1,2,3,4,5,6,7,8,9,0];
console.log(num);
delete num[0];
console.log(num);

// in delete operator the element is removed 
// the size of array remain same
// in the place of the element it show (<empty item>)

// concat is used to add 2 arrays

let num1 = [11,12,13,14,15,16,17,18,19];
let num2 = num.concat(num1);
console.log(num2);
let num3 = [20,21,22,23,24,25,26];

let num4 = num.concat(num1,num3);
console.log(num4);
// num2 = num + num1;
// it can take as many arrays as you want


// it sort the array in alphabetically
// in this 2 > 11111; and so on;
// default function
let num5 = [5,4,3,2,1,11,22,33,44,55];
num5.sort();
console.log(num5);


// now it sort in inc order of numbers
// compare function
let compare = (a,b) =>{
    return a-b;
}
num5.sort(compare);
console.log(num5);

// reverse the array
num5.reverse();
console.log(num5);

// Splice and slice
// splice(indexNo,no of elements to be deleted,elements to add after that index);
// return arr of deleted elements
// it modify the same array
let num6 = [1,2,3,4,5,6,7,8];
let delVal = num6.splice(2,3,100,101,102,103,104,105);
console.log(num6);
console.log(delVal);

// slice function
// it make new array cant modify curr array
// it return a part of the array

let num7 = num.slice(2);
console.log(num7);

let num8 = num.slice(1,3);
console.log(num8);





