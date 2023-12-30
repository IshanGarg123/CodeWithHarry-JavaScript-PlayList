const prompt = require("prompt-sync")({ sigint: true });

let n = prompt("Enter the number ");
n = Number.parseInt(n);

let i=1;
while(i<=n)
{
    console.log(i);
    i++;
}

i=1;

// do-while loop

do{
    console.log(i);
    i++;

}while(i<=n)