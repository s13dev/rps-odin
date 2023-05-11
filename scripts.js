function getComputerChoice() {
  const signs = ["rock", "paper", "scissors"];
  return signs[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
  return prompt("rock, paper, or scissors").toLowerCase();
}

function playRPS(pc, cc) {
  if (pc === cc) {
    return "Draw";
  } else if  ((pc === "rock" && cc === "paper") || (pc === "paper" && cc === "scissors") || (pc === "scissors" && cc === "rock") ) {
    return `You lose because ${cc} beats ${pc}.`;
  } else {
    return `You win because ${pc} beats ${cc}.`;
  }
}

function winCounter() {
  let win = 0;
  let lose = 0;
  for (let i = 0; i < 5; i++) {
    const vape = playRPS(getPlayerChoice(), getComputerChoice())
    switch (vape) {
      case "Draw":
        console.log(vape);
        break;
      case "You win because rock beats scissors.":
      case "You win because paper beats rock.":
      case "You win because scissors beats paper.":
        console.log(vape);
        win++;
        break;
      case "You lose because rock beats scissors.":
      case "You lose because scissors beats paper.":
      case "You lose because paper beats rock.":
        console.log(vape);
        lose++;
        break;
    }
  }
  return [win, lose];
}

function game(arr) {
  if (arr[0] > arr[1]) {
    return "ULTIMATE WINNER!"
  } else if (arr[1] > arr[0]) {
    return "BIG LOSER!"
  } else {
    return "T I E"
  }
}


console.log(game(winCounter()));