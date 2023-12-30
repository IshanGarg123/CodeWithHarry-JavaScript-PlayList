// addEventListener 
// use to assign multiple handler to an event
// removeEventListener
// use to remove event handlers

let btn = document.getElementById("btn");

let x = (e)=>{
    console.log(e);
    console.log(e.target);
    console.log(e.type);
    console.log(e.currentTarget);
    console.log(e.clientX);
    console.log(e.clientY);
    // shows the html where the event takes place 
    //alert("Hello World1!");
}

let y = (e)=>{
    //alert("Hello World2!");
}

btn.addEventListener('click',x);

btn.addEventListener('click',y);


// let a = prompt("What is your favorite number");

// if(a == "2")
// {
//     btn.removeEventListener('click',x);
// }
// the object should be save in a var 
// and should be same
// else it will not work either you will write full fun in it


// now the removeEventListener works
// the e in this is a event object 