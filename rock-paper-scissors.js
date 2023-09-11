const choice = ["Rock", "Paper", "Scissors"]


let playerWins = 0;
let computerWins = 0;

let score =  `Player: ${playerWins} Computer:${computerWins}` ;





// function game() {
//  for (let i = 0; i < 1; i++) {
//     console.log(playRound(getComputerChoice(), getPlayerChoice()));
//  }
// }

function checkWinner() {
    if (playerWins >= 5) {
        return "Player Won"
    }
    else if (computerWins >= 5) {
        return "Computer Wins"
    }
    else {
        return false;
    }
}
function getComputerChoice() {
    number = Math.floor((Math.random() * 3));
    return choice[number].toLowerCase();
  
}

function getPlayerChoice() {
    playerChoice = prompt("Choose your weapon:").toLowerCase();
    if (!(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors")) {
        throw new Error("Wrong input. Code execution stopped.");
        
    }
    else {
        return playerChoice;
    }
}

function playRound(computer , player) {
    if (computer === "rock") {
        if (player === "paper") {
            playerWins += 1;
            return "You Won";
        }
        else if ( player === "scissors") {
            computerWins += 1;
            return "You Lose";
        }
        else {
            return "Tie"
        }
    }
    else if (computer === "paper") {
        if (player === "paper") {
            return "Tie";
        }
        else if ( player === "scissors") {
            playerWins += 1;
            return "You Won";
        }
        else {
            computerWins += 1;
            return "You Lose";
        }
    }
    //scissors
    else {
        if (player === "paper") {
            computerWins += 1;
            return "You Lose";
        }
        else if ( player === "scissors") {
            return "Tie";
        }
        else {
            playerWins += 1;
            return "You Won"
          
       }
    }
    
 
}

const playerButton = document.querySelectorAll('button');


const div = document.createElement('div');
div.style.backgroundColor = 'pink';

// Create a new p (paragraph) element
const textResult = document.createElement('p');

// Append the p element to the div
div.appendChild(textResult);

// Append the div to the document body
document.body.appendChild(div);

playerButton.forEach( (button) => {
  button.addEventListener('click', function(e) {
    const computer = getComputerChoice();
    const player = e.target.innerText;
    result = playRound(computer , player)
    score =  `Player: ${playerWins} Computer:${computerWins}`
    textResult.textContent = `${result} ${score}`;
    if (!checkWinner() == false) {
        winner = document.createElement('p');
        winner.textContent = checkWinner();
        div.appendChild(winner);
    };
  });
});


