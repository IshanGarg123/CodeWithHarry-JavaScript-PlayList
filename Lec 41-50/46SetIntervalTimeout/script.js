// set interval and set time out
// alert("Hello");

// let a = setTimeout(()=>{
//     alert("I am inside setTime out");
// },5000);

// let b = prompt("Do you want to run alert(y/n)");
// if(b === "n")
// {
//     clearTimeout(a);
// // to remove the timeout
// // the timeout will not be printed
// }

// console.log(a);
// it return timer id in console

// 2sec

// setTimeout func use to do something after the certain
// amount of time when the js loads
// and the time give in ms(milisec) to it


const sum = (a,b)=>{
    console.log("yes i am running",(a+b));
}

setTimeout(sum(3,4),2000);
// it can also be written as setTimeOut(sum,2000,3,4);
// the arg of the function can be pass this way also

// setInterval and setTimeOut are consider as similar
// the differce is
// setTimeout - run fun 1 time after given delay
// setInterval - run fun infinity num.
// after a cerntain time between them

let b = setInterval(()=>{
    console.log("Ram Ram");
},2000);

clearInterval(b);
// to remove the setInveral;



