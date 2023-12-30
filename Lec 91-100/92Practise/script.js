// problem 1
const a = (text)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(text);
        },2000);
    })
}

(async()=>{
    let text = await a("Hello");
    console.log(text);
    text = await a("World");
    console.log(text);
})();

// problem 2
function sum(a,b,c)
{
    return (a+b+c);
}

let x = [1,3,5];
console.log(sum(...x));

// problem 3

const b = (text ,n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(text);
        },n*1000);
    })
}

(async()=>{
    let text = await b("Ram",1);
    console.log(text);
    text = await b("Ram",1);
    console.log(text);
})();

// problem 4

function SI(p,r,t)
{
    return (p+(p*r*t)/100);
}

console.log(SI(1000,5,1));