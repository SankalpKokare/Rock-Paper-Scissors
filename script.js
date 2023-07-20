
function getComputerChoice()  // generate computer choice
{
    const choice = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor((Math.random() * choice.length));
    return choice[randomIndex];
}

let userScore = 0;          
let computerScore = 0;

function score(x)  //count score

{

    if (x == 1) {
        ++userScore;
    } else if (x == 2) {
        ++computerScore
    }

}

function playRound(user, computer) 

{

    if (user == computer) {
        console.log("Its a tie");
    }
    else if (user == "rock" && computer == "paper") {
        console.log("You Loose! Paper beats Rock");
        score(2);

    }
    else if (user == "paper" && computer == "rock") {
        console.log("You Win! Paper beats Rock");
        score(1);

    }
    else if (user == "scissors" && computer == "paper") {
        console.log("You Win! Scissors beats paper");
        score(1);

    }
    else if (user == "paper" && computer == "scissors") {
        console.log("You Loose! Scissors beats paper");
        score(2);

    }
    else if (user == "rock" && computer == "scissors") {
        console.log("You Win! Rock beats scissors");
        score(1);

    }
    else if (user == "scissors" && computer == "rock") {
        console.log("You loose! Rock beats scissors");
        score(2);
    }
    else {
        console.log("Wrong value entered");
    }

}



let computerSelection = getComputerChoice();



for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt(i + " out of 5: Enter Rock or Paper or Scissors");
    playerSelection = playerSelection.toLowerCase();
    playRound(playerSelection, computerSelection);
}

if (userScore > computerScore) // final score
 {
    console.log("You Win!", userScore, computerScore);
} else if (userScore < computerScore) {
    console.log("You Loose!", userScore, computerScore);
} else {
    console.log("Its a tie ", userScore, computerScore);
}









