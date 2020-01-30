


let playerScore = 0;
let compScore = 0;

let compScoreBoardElem= document.getElementById("c-Score");
var playerScoreBoardElem = document.getElementById("p-Score");
let rockElem = document.getElementById("r");
let paperElem = document.getElementById("p");
let scissorElem = document.getElementById("s");
let gameResultElem = document.getElementById("game-winner");


function win(){
gameResultElem.innerText = "You Win!"
}


function lose(){
  gameResultElem.innerText = "You Lose!"
  
  
}


function tie(){
  gameResultElem.innerText = "Tie"
  
}


function getCompChoice(){
  let choices = ["r","p","s"];
  let randoNumber = Math.floor(Math.random()*3)
  console.log(randoNumber)
  return choices[randoNumber]
}


function game(playerChoice){
let compChoice = getCompChoice();
switch(playerChoice + compChoice){
  case "rs":
  case "pr":
  case "sp":
  win()
  break;
  case "sr":
  case "rp":
  case "ps":
  lose()
  break;
  case "rr":
  case "pp":
  case "ss":
  tie()
  break;


}
  
 
}







function rockBtn(){

game('r')
}


function paperBtn(){
  
  game('p')
}

function scissorsBtn(){
  
  game('s')
}




