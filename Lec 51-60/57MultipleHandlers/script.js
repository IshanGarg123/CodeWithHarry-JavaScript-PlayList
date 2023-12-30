// Multiple handler ek hi promise see kese attach kia ja sakte hai
// you have a promise
// you want when the promise is run successfully
// after that a code will also run


let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("I am resolved");
        resolve(1);
    },2000)
})

// Multiple handlers
// to the same promise can be done
// the handler attach first execute first
// the handler run independly 

p1.then(()=>{
    console.log("Congratulation this promise is resolved");
    console.log("Hello");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(4);
        },2000);
    })
}).then((value)=>{
    console.log(value);
})

p1.then(()=>{
    console.log("hurry");
})