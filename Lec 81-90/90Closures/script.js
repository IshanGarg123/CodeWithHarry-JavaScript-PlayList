// Closure set
message = "Good Global";

function hello1()
{
    message = "Good Morning"
    console.log("Hello1" + message);
}

function hello2()
{
    //message = "Good Morning"
    console.log("Hello1" + message);
}

hello1();
hello2();

// it takes the message from outside the scope
// it take message = "Good Global";

function hello3()
{
    message = "Good Morning"
    {
        let message = "Good Afternoon";
        console.log("Hello1" + message);
    }
    console.log(message);
}
hello3();

function hello4()
{
    let message = "Good Morning"
    {
        let message = "Good Afternoon";
        console.log("Hello1" + message);
    }
    let c = function hello5()
    {
        console.log("I am c "+ message);
    }
    return c;
}

let c = hello4();
c();

//closure
// along its lexical scope and function scope
// during returing a function
// a closure is defined as the function with its lexical scope
// it is like function inside a function
// using var of outer function


function init()
{
    var name = "Mozilla";
    function displayName()
    {
        console.log(name);
    }
    name = "Harry";
    return displayName;
}

let c1 = init();
c1();
// it print harry not mozilla 
// as the value of name is overwritten


const x =()=>{
    let a =1;
    console.log(a);
    const y = ()=>{
        let a=2;
        console.log(a);
        const z = ()=>{
            let a=3;
            console.log(a);
        }
        z();
    }
    y();
}
x();

function returnFun()
{
    const x =()=>{
        let a =1;
        console.log(a);
        const y = ()=>{
            let a=2;
            console.log(a);
            const z = ()=>{
                let a=3;
                console.log(a);
            }
            z();
        }
        y();
    }
    return x;
}

let a = returnFun();
a();

// when you returing it is a point when you
// calling the function 
// both will give the same output

// closure is a function with its lexical environment

