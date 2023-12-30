// problem1
//document.getElementsByTagName("li")[0].style.color = "red";

// problem2
// when we use view page source(html page we write)
// it create a table without tbody
// when we inspect it . it create table with tbody

// problem 3
let a = document.getElementById("div");
a.firstElementChild.style.color = "green";
a.lastElementChild.style.color = "green";

// problem 4
Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.color = "cyan";
});

// problem 5
// it shows the closest ancestor and decestor
// in the functions like matches contains closest

