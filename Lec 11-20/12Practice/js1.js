const prompt = require("prompt-sync")({ sigint: true });

// problem 1 
let obj = {
    ishan:10,
    ram:20,
    sam:30,
    rahul:40,
    mohan:50
}

for(let i in obj)
{
    console.log(obj[i]);
}

// problem 2
for(let i=0;i<Object.keys(obj).length;i++)
{
    console.log(obj[Object.keys(obj)[i]]);
}

// problem 3
let ans = 0;
let i;
do{
    i = prompt("enter the number ");
}while(i!=ans);

console.log("you have entered the correct Number");

// problem 4

const mean = (a,b,c,d,e) =>{return (a+b+c+d+e)/5};
console.log(mean(10,20,30,40,50));