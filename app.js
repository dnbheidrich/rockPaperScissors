
let computerChoice = ["Rock", "Paper", "Scissors"]
let playerchoice = ["Rock", "Paper", "Scissors"]
let rockElem = document.getElementById("btnRock")
let paperElem = document.getElementById("btnPaper")
let scissorElem = document.getElementById("btnScissors")

function pickRock(){
  let randoChoice = Math.floor(Math.random() * computerChoice.length)
  if (playerchoice[0] == computerChoice[randoChoice]) { 
    console.log("Tie")
  console.log(randoChoice)
  } 
  else if(playerchoice[1] == computerChoice[randoChoice]){
    console.log("Lose")
  } else {
    console.log("You Win")
  }
  }
  

function pickPaper(){
  let randoChoice = Math.floor(Math.random() * computerChoice.length)
 if (playerchoice[0] == computerChoice[randoChoice]) { 
    console.log("You win")

    
  } else if(playerchoice[1] == computerChoice[randoChoice]){
    console.log("Tie")
  } else {
    console.log("You Lose")
  }
}
function pickScissors(){
  let randoChoice = Math.floor(Math.random() * computerChoice.length)
  if (playerchoice[2] == computerChoice[randoChoice]) { 
    console.log("You Lose")
    debugger
    
  } else if(playerchoice[2] == computerChoice[randoChoice]){
    console.log("You Win")
  } else {
    console.log("Tie")
  } 
}













