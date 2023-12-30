const prompt=require("prompt-sync")({sigint:true});
let a = prompt("Hey whats your age?")
console.log(a);
console.log(typeof(a));
a = Number.parseInt(a);
// converting string into number;
console.log(typeof(a));

if(a>0)
{
    console.log("this is a valid age");
}
else{
    console.log("This is not a valid age");
}

//alert("Hello");
// show alert message