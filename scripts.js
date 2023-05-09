function getComputerChoice() {
  const signs = ["rock", "paper", "scissors"];
  return signs[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
  const signs = ["rock", "paper", "scissors"];
  return signs[Math.floor(Math.random() * 3)];
}

function playRPS(pc, cc) {
  let pcLow = pc.toLowerCase();
  if (pcLow === cc) {
    return "Draw";
  } else if  ((pcLow === "rock" && cc === "paper") || (pcLow === "paper" && cc === "scissors") || (pcLow === "scissors" && cc === "rock") ) {
    return `You lose because ${cc} beats ${pcLow}.`;
  } else {
    return `You win because ${pcLow} beats ${cc}.`;
  }
}

function game() {
}


console.log(game());