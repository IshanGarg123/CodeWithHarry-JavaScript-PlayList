// async and sync programming
// async actions are somtime which initiate now 
// can be finish later after js loads
// eg using set time out functions

// sync means actions are initiate and finish one
// by one in line 
// means the file loaded run top to bottom

// sync programming
// let a = prompt("What is your Name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favorite color?");
// console.log(a+" is "+b+" years old and has "+c+" favorite color.");


//Asynchronous programming
console.log("Start");
setTimeout(function(){
    console.log("my name is ishan");
},2000);
console.log("end");

// callback function
// it is fun that pass to another fun as an argument
function loadScript(scr,callback)
{
    var script = document.createElement("script");
    script.src = scr;
    script.onload = callback(null,scr);
    script.onerror = callback(true,scr);
    document.body.appendChild(script);
}

loadScript("https://ishancdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",hello);
// the js is loaded to the body
// in this hello is a callback function 


function hello(error,src){
    if(error)
    {
        console.log("Error");
    }
    alert("Hello World" + src);
}

function goodmorning(error,src){
    if(error)
    {
        console.log("Error");
    }
    alert("Hello World" + src);
}