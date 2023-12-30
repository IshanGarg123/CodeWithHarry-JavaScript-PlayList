// Async/Await
// it is a special syntax to work with promises in js
// a fun can be made async using async keyword

// a async function always returns a promise
// other values are wrapped in promise automatically

// async function ishan()
// {
//     return 8;
// }

// ishan().then((x)=>{
//     alert(x);
// });

// async ensures that the function returns a promise
// other values are wrapped in promise automatically


// async means it execute after some time 

async function ishan() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27deg");
    }, 2000);
  });

  let bangloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21deg");
    }, 5000);
  });
    // delhiWeather.then(alert);
    // bangloreWeather.then(alert);

  console.log("Fetching delhi Weather plese wait ...");
  let delhi = await delhiWeather;
  console.log("Delhi weather fetch "+ delhi);
  console.log("Fetching banglore Weather plese wait ...");
  let banglore = await bangloreWeather;
  console.log("Banglore weather fetch "+ banglore);
  return [delhi,banglore];

  // the delhi var store the value of delhiWeather
  // the banglore var store the value of bangloreWeather
  // the await keyword means to wait until the promise is resolved

}

const cherry = ()=>{
    console.log("hey i am cherry ans i am not waiting");
}

const main1 = async ()=>{
    console.log("Welcome to weather control room");
    let a = await ishan();
    // first full ishan fun execute that cherry will execute
    let b = await cherry();
}

main1();
// it returns array of promises results;
// they helps to allow to control the flow of the program
// async funs run parallely
// async fun inside the function 
// you the control the flow of the program 
// where it wait which thing execute first and so on..




