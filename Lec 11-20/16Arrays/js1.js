// Arrays in js 
// collection of diff data type
// Arrays in js can store data of diff date type;

let marks =[91,62,73,84,null,"Ishan","not present"];
console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
// if index out of bond then it show undefined
console.log(marks[40]);

console.log(marks.length);

marks[7] = 100; // add new element
marks[0] = 99; // change a curr element

console.log(marks);

// Arrays are mutable Arrays can be changed.
// Strings are not mutable string can't be changed

// typeof array is object;

console.log(typeof(marks));
// object

for(let i=0;i<marks.length;i++)
{
    console.log(marks[i]);
}

