// local global and functional scope
let a = 8;
console.log(a);

{
    var b = 10;
    let c = 10;
}

console.log(b);
//console.log(c);
// this line give error
// due to block scope of the variables

function print()
{
    var z = 50;
    console.log("Hello World "+z);
}

print();
//console.log(z);
// it give error as the z is in the functional scope

