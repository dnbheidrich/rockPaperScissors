
let choice = ["Rock", "Paper", "Scissors"]

let rockElem = document.getElementById("btnRock")
let paperElem = document.getElementById("btnPaper")
let scissorElem = document.getElementById("btnScissors")

function pickRock(){
 if (choice[0]) {
   console.log("Rock!")
 }

}
function pickPaper(){
   if (choice[1])
   console.log("Paper")

}
function pickScissors(){
  if (choice[2])
  console.log("Scissors!")

}

function compChoice(){
Math.floor(Math.random() * choice.length)
}
function drawGame() {
  
  document.getElementById("btnRock");
  document.getElementById("btnPaper");
  document.getElementById("btnScissors")
 
  drawGame()
}

