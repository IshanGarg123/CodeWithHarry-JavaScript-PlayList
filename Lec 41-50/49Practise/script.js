// problem 1
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

btn1.addEventListener('click',()=>{
    alert("Button1");
})

btn2.addEventListener('click',()=>{
    alert("Button2");
})

btn3.addEventListener('click',()=>{
    alert("Button3");
})

// problem3

let google = document.getElementById("google");
google.addEventListener('click',()=>{
    let url = "https://google.com";
    window.location = url;

});

// problem 4
const fetchContent = async(url) =>{
    con = await fetch(url);
    let a = await con.json();
    return a;
}

setInterval(async function(){
    let url="https://jsonplaceholder.typicode.com/todos/1"
    console.log(await fetchContent(url));
},3000)

// set interval to fetch data again and again from a url


// problem 5
let bulb = document.getElementById("bulb");

setInterval(async function(){
    document.getElementById("bulb").classList.toggle("glow")
},300);
 