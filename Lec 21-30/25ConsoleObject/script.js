// console is a object in the js 
// it have many function in it
// printing thing on console it is a function of 
// console object
console.log(console);
// to print on console

console.error("Hey this is a error");
// to print (throw on console) error on the console


console.assert(5>53);
// same assertion as C
// if true than ok
// if false it throw an error

console.clear();
// to clear the console
// console is empty

obj = {a:1,b:2,c:3}
console.table(obj);
// convert obj into array form

console.warn("Plese don't drink and drive");
// print warning in the console

console.info("Ishan Garg");
// same as console.log
// diff is that it show under info tags

let a;
console.time("a");
let sum = 0
for(let i=1;i<=10000000;i++)
{
    sum+=i;
}
console.log(sum);
console.timeEnd("a");
console.log("Time taken by for Loop "+a);

// it return time taken between line 33 and 40;

let b;
console.time("b");
let sum1 = 0
let i=1;
while(i<=10000000)
{
    sum1+=i;
    i++;
}
console.log(sum1);
console.timeEnd("b");
console.log("Time taken by while Loop " + b);

