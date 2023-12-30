// genrate random number in js
const prompt = require("prompt-sync")({ sigint: true });
let num = parseInt(Math.random()*100);
let guess = 0;
let a;

while(1)
{
    a = prompt("enter the number");
    a = parseInt(a);
    guess++;
    if(num === a)
    {
        console.log("Wow Correct Answer");
        break;
    }
    else if(a<num)
    {
        console.log("Your num is Small");
    }
    else
    {
        console.log("Your num is large");
    }
}

console.log("The num is",num);

let score = 100 - guess;
console.log("Your Score is",score);

