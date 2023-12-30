let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Resolve after 2 sec");
    resolve(56);
  }, 2000);
});

p1.then((value) => {
  console.log(value);
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2");
    }, 2000);
  });
  return p2;
}).then((value) => {
    console.log("We are Done");
    return 2;
    // js convert the return value into a promise
}).then((value) => {
    console.log("Now we are pakka done");
});

// promises are  use to avoid the callback Hell problem
// we can chain of promises we can can pass the resolve value in them

const loadScript = (src) => {
  return new Promise((resolve,reject) => {
    let script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve(1);
    };
    script.onerror = () =>{
        reject(0);
    }
  });
};

let p3 = loadScript("script1.js");
p3.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log("we are sorry but we are having problem loading the script");
})

let p5 = loadScript("abcd.js");

p5.then((value)=>{

}).then((value)={
}).then((value)=>{
}).catch((error)=>{
})
// and so on .....
// the code will not horizontally grow
// and our problem is solved


