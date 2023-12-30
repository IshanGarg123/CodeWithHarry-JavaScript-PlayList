let a = new Date();

console.log(a.toDateString());
console.log(a.toTimeString());

setInterval(()=>{
    let d = new Date();
    let time = document.getElementById("time");
    time.innerHTML = d;
},1000)