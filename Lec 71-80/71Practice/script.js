let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response
  .then((v) => {
    return v.json();
  })
  .then((contest) => {
    console.log(contest);
    let ihtml = "";
    for (let item in contest) {
      console.log(contest[item]);
      ihtml += `
        <div class="card" style="width:300px;">
            <img height="200" width="300" src="https://images.squarespace-cdn.com/content/v1/5ef4e8cc5d84d010a825e90e/1594567552079-TSA5125J92MOYKYUUJLF/leeding-the-way.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${contest[item].name}</h5>
                <p class="card-text"> Status is ${contest[item].status} and site is ${contest[item].site}</p>
                <p class="card-text"> is24Hour ${contest[item].in_24_hours} </p>
                <p class="card-text"> ${contest[item].start_time} </p>
                <p class="card-text"> ${contest[item].end_time} </p>
                <a href="${contest[item].url}" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`;
    }
    CardContainer.innerHTML = ihtml;
  });

// problem 2
let a = prompt("Enter your note");
localStorage.setItem("note", a);

// problem 3
let b = localStorage.getItem("note");
if (b) {
  console.log(localStorage.getItem("note"));
}

// problem 4 
 let c = confirm("Do you want to delete your note");
 if(c){
    localStorage.removeItem("note");
    alert("Note del successfully");
 }