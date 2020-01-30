


let playerScore = 0;
let compScore = 0;

let compScoreBoardElem= document.getElementById("c-Score");
let playerScoreBoardElem = document.getElementById("p-Score");
let rockElem = document.getElementById("r");
let paperElem = document.getElementById("p");
let scissorElem = document.getElementById("s");
let gameResultElem = document.getElementById("game-winner");


function getCompChoice(){
  let choices = ["r","p","s"];
  let randoNumber = Math.floor(Math.random()*3)
  console.log(randoNumber)
  return choices[randoNumber]
}


function game(playerChoice){
let rockElem = document.getElementById("r");
let paperElem = document.getElementById("p");
let scissorElem = document.getElementById("s");





  
  console.log(playerChoice)
  console.log(getCompChoice)

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




getCompChoice()