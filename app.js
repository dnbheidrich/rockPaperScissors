
let choice = ["Rock", "Paper", "Scissors"]

let rockElem = document.getElementById("btnRock")
let paperElem = document.getElementById("btnPaper")
let scissorElem = document.getElementById("btnScissors")

function playerChoice(){
 if (choice[0]) {
   console.log("Rock!")
 }

 else if (choice[1]){
   console.log("Paper")

}else
  if (choice[2]){
  console.log("Scissors!")

}
}

function compChoice(){
Math.floor(Math.random() * choice.length)
}


