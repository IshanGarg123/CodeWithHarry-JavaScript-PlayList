// IIFE - immediately invoked function expression
// it is used to async function easily
// and use await in it
// function defined and run at same time

let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(456);
        }, 2000);
    })
}

// let b = await a;
// let c = await c;
// let d = await d;

// console.log(b,c,d);
// it give error

// methord 1 
// to do it correctly

let f = async () => {
    let b = await a();
    console.log(b);
    let c = await a();
    console.log(c);
    let d = await a();
    console.log(d);
}
f();

// IIFE

(async () => {
    let b = await a();
    console.log(b);
    let c = await a();
    console.log(c);
    let d = await a();
    console.log(d);
})();

// it is used to avoid polluting the global name space


