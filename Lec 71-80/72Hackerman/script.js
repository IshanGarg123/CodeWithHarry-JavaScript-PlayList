let a = [
    "Initializing Hacking tools...",
    "Connecting to Facebook...",
    "Connecting to server1...",
    "Connection failed Retrying...",
    "Connecting to server2...",
    "Connected SuccessFully...",
    "UserName is harry...",
    "Trying Brute Force...",
    "200k passwords tried...",
    "Match not found...",
    "Another 200k passwords tried...",
    "Match found...",
    "Accessing Account...",
    "Hack Successful..."
]

const sleep = async(sec)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(true)
        },sec*1000);
    })
}

const showHack = async (messages) =>{
    await sleep(2);
    text.innerHTML = text.innerHTML + messages + "<br>";
}

//IIFE - immediatly invoked function expression
// example

(()=>{
    console.log("Hello World");
})();

(async()=>{
    for(let i=0;i<a.length;i++)
    {
        await showHack(a[i]);
    }
})();
