
//set variable to buttons
const rockButton = document.getElementById("rock");
const PaperButton = document.getElementById("paper");
const ScissorButton = document.getElementById("scissors");

//set variable for text
const gameScoreTxt = document.getElementById("gameScore");
const winnerBoard = document.getElementById("winnerBoard");

//set eventlistener to button 
rockButton.addEventListener ("click" , setRock );

PaperButton.addEventListener ("click" , setPaper );

ScissorButton.addEventListener ("click" , setScissors );

//get random value from computer
function getComputerChoice()  
{
    const choice = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor((Math.random() * choice.length));
    return choice[randomIndex];
}

//set value from event listener to variable

let userValue = "";
let computerValue = "";

function setRock () {
    console.log("Rock button click");
    userValue = "rock";
    computerValue = getComputerChoice();
    console.log(userValue);
    console.log(computerValue);
    game(userValue , computerValue);
}

function setPaper () {
    console.log("Paper button click");
    userValue = "paper";
    computerValue = getComputerChoice();
    console.log(userValue);
    console.log(computerValue);
    game(userValue , computerValue);
}

function setScissors () {
    console.log("Scissors button click");
    userValue = "scissors";
    computerValue = getComputerChoice();
    console.log(userValue);
    console.log(computerValue);
    game(userValue , computerValue);
}

//score variable
let userScore = 0;
let computerScore = 0;
let tieScore =  0;

//game function 

function game(user, computer) 

{

    if (user == computer) {
      
        console.log("Its a tie");
        tieScore++;
        gameCount();
        
    }
    else if (user == "rock" && computer == "paper") {
        console.log("You Loose! Paper beats Rock");
        computerScore++;
        gameCount();

    }
    else if (user == "paper" && computer == "rock") {
        console.log("You Win! Paper beats Rock");
        userScore++
        gameCount();

    }
    else if (user == "scissors" && computer == "paper") {
        console.log("You Win! Scissors beats paper");
        userScore++;
        gameCount();

    }
    else if (user == "paper" && computer == "scissors") {
        console.log("You Loose! Scissors beats paper");
        computerScore++;
        gameCount();

    }
    else if (user == "rock" && computer == "scissors") {
        console.log("You Win! Rock beats scissors");
        userScore++;
        gameCount();

    }
    else if (user == "scissors" && computer == "rock") {
        console.log("You loose! Rock beats scissors");
        computerScore++;
        gameCount();
    }
    else {
        console.log("Wrong value entered");
    }
}

//result 
function gameCount () {
    console.log (computerScore , userScore, tieScore);
    gameScoreTxt.textContent = "User Score " + userScore + " Computer score " + computerScore;

    if ((computerScore+userScore+tieScore)==6) {
        alert("alert");
        userScore = 0;
        computerScore = 0;
        tieScore = 0;
        gameScoreTxt.textContent = "User Score " + userScore + " Computer score " + computerScore;
    }
    
}