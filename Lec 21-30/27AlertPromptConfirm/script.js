alert("Hello your Script works");
let a = prompt("enter the value of a");
a = parseInt(a);
alert("you have entered a " + a +" of type " + typeof(a));
document.write(a);

// prompt with default value in it
alert("Hello your Script works");
let b = prompt("enter the value of b","8");
// 8 is the default value shown to user;
b = parseInt(b);
alert("you have entered b " + b +" of type " + typeof(b));
document.write(b);

// confirm in js
// it return boolean value
// true or false
// based on user
let write = confirm("Do you want to write on page");
// it show allow ok or cancel
// ok = true
// cancel  = false

if(write)
{
    document.write("Write");
}
else{
    document.write("not Write");
}


// plese avoid the use of alert prompt and confirm 
// in front end as it will old look


