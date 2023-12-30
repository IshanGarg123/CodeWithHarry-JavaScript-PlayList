let player1 = 0;
let player2 = 0;

let num = prompt("enter the amount of rounds you want to play(3-10)");

for (let i = 1; i <= num; i++) {
  let player = prompt("enter Snake(s) , Water(w) , Gun(g)");
  let comp = Math.random() * 3;
  //console.log(comp);
  comp = parseInt(comp);
  console.log(comp);

  if (comp === 0) {
    comp = "s";
  } else if (comp === 1) {
    comp = "w";
  } else {
    comp = "g";
  }

  console.log("Player", player);
  console.log("comp", comp);

  if (player === comp) {
    console.log("Same");
  } else if (player === "s") {
    if (comp === "w") {
      player1++;
      console.log("player won");
    } else {
      player2++;
      console.log("Computer Won");
    }
  } else if (player === "w") {
    if (comp === "g") {
      player1++;
      console.log("player won");
    } else {
      player2++;
      console.log("Computer Won");
    }
  } else if (player === "g") {
    if (comp === "s") {
      player1++;
      console.log("player won");
    } else {
      player2++;
      console.log("Computer Won");
    }
  }
}

if (player1 == player2) {
  document.write("Match Draw <br>");
  document.write("Player points :", player1, "<br>");
  document.write("Comp points :", player2, "<br>");
} else if (player1 > player2) {
  document.write("Player Won <br>");
  document.write("Player points :", player1, "<br>");
  document.write("Comp points :", player2, "<br>");
} else {
  document.write("Computer Won <br>");
  document.write("Player points :", player1, "<br>");
  document.write("Comp points :", player2, "<br>");
}
