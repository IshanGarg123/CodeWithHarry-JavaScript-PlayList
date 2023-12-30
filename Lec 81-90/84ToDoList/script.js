let submit = document.getElementById("submit");
let todo = document.getElementById("todo");
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let titlec = title.value;
    let descc = desc.value;
    // use to prevent the reloading of the page
    localStorage.setItem("todo",JSON.stringify([titlec,descc]));
    console.log(e);
    todo.innerHTML += `
    <h1> ${titlec}</h1>
    <h2> ${descc}</h2>
    `
    title.value = "";
    desc.value = "";
})

let delete1 = document.getElementById("delete1");
delete1.addEventListener('click',(e)=>{
    localStorage.removeItem("todo");
    todo.innerHTML=``;
});