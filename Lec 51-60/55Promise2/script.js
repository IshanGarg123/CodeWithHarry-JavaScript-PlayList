let p = new Promise((resolve,reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
        console.log("I am a promise and i am rejected");
        //resolve(true);
        // to say it run succesfully
        reject(new Error("I am an Error"));
        // to throw this syntax is used
    },5000);
})
// anything you run on the promise will run in the background
// or when it executed completely it will notify you
console.log(p);


let p1= new Promise((resolve,reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
        console.log("I am a promise and i am resolved");
        resolve(true);
        //reject(new Error("I am an Error"));
    },5000);
})

console.log(p1);
// now p1 is the object contains
// contain 2 promise properies
// state an result
// state - fulfilled or rejected
// if(state == fulfilled) then result - true or false


// they will run parallely
// if you made 50 promises they will run parallely


// to get the value
// p1.then((value)=>{
//     console.log(value);
// })

// to catch the error
// p.catch((error)=>{
//     console.log("some error occur in p2");
// })
// it will catch the error and not show on console to you
// it help to know weather our code run or not
 
p.then((value)=>{console.log(value)},(error)=>{console.log(error)});


// state and result are 2 properties of the promise object
// state:- intitally pending changes to "fulfilled" (resolved)
// or rejected when reject 
// result:- initially pending than if resolve
// get the value of resolve
// rejected get error message in it
