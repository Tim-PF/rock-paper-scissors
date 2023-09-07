const choice = ["Rock", "Paper", "Scissors"]




game();




function game(gameNumber = 5) {
 for (let i = 0; i < gameNumber; i++) {
    console.log(playRound(getComputerChoice(), getPlayerChoice()));
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
            return "You Won";
        }
        else if ( player === "scissors") {
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
            return "You Won";
        }
        else {
            return "You Lose"
        }
    }
    //scissors
    else {
        if (player === "paper") {
            return "You Lose";
        }
        else if ( player === "scissors") {
            return "Tie";
        }
        else {
            return "You Won"
          
       }
    }
    
 
}
