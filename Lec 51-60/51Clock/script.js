// date object in js
let a = new Date();
let h = a.getHours();
let m = a.getMinutes();
let s = a.getSeconds();
let d = a.getDate();

console.log(h,m,s,d);

let clock = document.getElementById("clock");
clock.innerHTML = `${h}:${m}:${s}`;

let setTime = ()=>{
    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();
    let d = a.getDate();
    console.log(h,m,s,d);
    let clock = document.getElementById("clock");
    clock.innerHTML = `${h}:${m}:${s}`;
}

setInterval(setTime,1000);