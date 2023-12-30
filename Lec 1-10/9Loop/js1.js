const prompt = require("prompt-sync")({ sigint: true });

let n = prompt("Enter the number ");
n = Number.parseInt(n);
let sum = 0;
let fact = 1;

for(let i=1;i<=n;i++)
{
    sum += i;
    fact*= i;
    console.log(i);
}
console.log("Sum = " + sum);
console.log("Fact = "+ fact);

// for-in loop

let obj = {
    ishan:10,
    ram:20,
    sam:30,
    raju:40
}

// iterate over the keys of the object;
for(let i in obj)
{
    console.log(i+" "+obj[i]);
}

// for-of loop
// iterate over the values of the objects

for(let i of "Ishan")
{
    console.log(i);
}