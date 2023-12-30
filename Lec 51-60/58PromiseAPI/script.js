// promise API

let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value1");
    },1000)
});

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value2");
        //reject(new Error("Error"));
    },2000)
});

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Value3");
    },3000);
})

// p1.then((value)=>{
//     console.log(value);
// })

// p2.then((value)=>{
//     console.log(value);
// })

// p3.then((value)=>{
//     console.log(value);
// })

// Array of the Promises
// when all promises resloved it show the array of value to you
// at a same time
// when all promises resloved than the below script will run

// if any of the promise have an error no promise will work at all

// Methord 1

let promise_all = Promise.all([p1,p2,p3]);
promise_all.then((value)=>{
    console.log(value);
})

// it show value array with error also
// with status and value of each promise

// Methord 2

let promise_all1 = Promise.allSettled([p1,p2,p3]);
promise_all1.then((value)=>{
    console.log(value);
})

// Methord 3
// it give the promise of the value which execute first
let promise_all2 = Promise.race([p1,p2,p3]);
promise_all2.then((value)=>{
    console.log(value);
})

// Methord 4
// same as race return the value of promise execute first
// diff is it return only first resolve promise
// the race func can also return error promises
let promise_all3 = Promise.any([p1,p2,p3]);
promise_all3.then((value)=>{
    console.log(value);
})

// Methord 5
// simple return the promise resolve value
// use to make resolve value of the promise
// resolved promise

let promise_all4 = Promise.resolve(6);
promise_all4.then((value)=>{
    console.log(value);
})

// Methord 6
// simple return the error give by the user;
// return the error value of the promise
// rejected promise

let promise_all5 = Promise.reject(new Error("Error"));
promise_all5.then((value)=>{
    console.log(value);
})