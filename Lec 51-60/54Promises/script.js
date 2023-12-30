// promises in js
// normal lang mai say someone promise to do something
// in the same way the js promise you to do something 
// for you

// promise is a "promise of code of execution"
// code either executes or fails

// js acts both sync and async way
// it depend the way you use it

// promise is called automatically without calling
console.log("Hello1");
setTimeout(()=>{
    console.log("Hello2")
},2000)
console.log("My name is hello3");

// it will run without calling it
let promise = new Promise(function(resolve,reject){
    alert("Hello");
    resolve(56)
    // resolve is the value of the promise
    // it return it if job run successfully
    // reject is the error
    // if the job fails
    // resolve and reject are js callback functions
})
console.log(promise);

// if we want to fetch google.com homepage
// ==> console.log("Google.com home page")
// fetch data from the data API
// fetch pictures from the server
// printing downlord
// rest of the script

// promises use to do parallel execution;

