let name1 = "Ishan";
console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.slice(0,2));
console.log(name1.slice(1));
console.log(name1.replace("Ishan","Garg"));

let friend = "Ayush";
console.log(name1.concat(" is friend of ",friend," ok "));

let friend2 = "   Ramu    ";
console.log(friend2.trim());

let friend3 = "Ishan garg is good";
for(let i=0;i<friend3.length;i++)
{
    console.log(friend3[i]);
}

// string in js are immutable so fun return new strings
