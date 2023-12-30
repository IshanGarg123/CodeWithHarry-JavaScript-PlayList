//problem 1
// promises are a way to run in async way

const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(src + " Done Successfully ");
    };
    document.head.append(script);
  });
};

let a = loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
);
a.then((value) => {
  console.log(value);
});

// problem 2

const main1 = async () => {
  console.log(new Date().getMilliseconds());
  let a = await loadScript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
  );
  console.log(a);
  console.log(new Date().getMilliseconds());
};

main1();

// problem 3

let p = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Plese wait this is not acceptable"));
    },3000);
  });
};

let b = async () => {
  try {
    let c = await p();
    console.log(c);
  } 
  catch (error) {
    console.log(error);
    console.log("This error has been resolved");
  }
};

b();

// problem 4

let p1 = async() =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(10);
        },4000)
    })
};

let p2 = async() =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(20);
        },2000)
    })
};
let p3 = async() =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(40);
        },3000)
    })
};

const run = async()=>{
    console.log(new Date())
    let a1 = await p1();
    console.log(a1);
    let a2 = await p2();
    console.log(a2);
    let a3 = await p3();
    console.log(a3);
    console.log(new Date())
}

run();

const run1 = async()=>{
    console.time("run")
    let a1 = await p1();
    let a2 = await p2();
    let a3 = await p3();
    console.log(a1,a2,a3);
    console.timeEnd("run");
    // to store the time in the process in a variable
}

run1();

const run2 = async()=>{
    console.time("run1")
    // all them running at same time
    // the time is the maxtime of the 3 tasks
    let a1 = p1();
    let a2 = p2();
    let a3 = p3();
    let a1a2a3 = await Promise.all([a1,a2,a3]);
    console.log(a1a2a3);
    console.timeEnd("run1");
    // to store the time in the process in a variable
}

run2();