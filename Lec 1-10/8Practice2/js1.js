const prompt = require("prompt-sync")({ sigint: true });

// problem 1
let age = prompt("enter your age ");
age = parseInt(age);

if (age >= 10 && age <= 20) {
  console.log("age between 10 and 20");
} else {
  console.log("age is not between 10 and 20");
}

// problem 2
switch (age) {
  case 11:
    console.log(age);
    break;
  case 12:
    console.log(age);
    break;
  case 13:
    console.log(age);
    break;
  default:
    console.log("Your age is not special");
}

// problem 3

let n = prompt("Enter the number ");

if(n%2==0 && n%3==0)
{
    console.log("Divisible by 2 and 3");
}
else
{
    console.log("No divisible by 2 and 3");
}


// problem 4
if(n%2==0 || n%3==0)
{
    console.log("Divisible by 2 or 3");
}
else
{
    console.log("No divisible by 2 or 3");
}

// problem 5
let ans = (age>=18)?"you can drive":"you cant drive";
console.log(ans);