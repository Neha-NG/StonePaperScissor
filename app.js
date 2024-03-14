let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //rock, paper, scissors     ------Math.random();
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}

const drawGame = () => {
    // console.log("Game was draw.");
    msg.innerText = "Game was draw. Play Again.";
    msg.style.backgroundColor = "#081b31";


}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        // console.log("You win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        // console.log("You lose.");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
     //Generate computer choice 
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);


    if(userChoice === compChoice) {
        //Draw Game
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock") {
            //paper, scissors
            userWin = compChoice === "paper" ? false : true;         //compChoice if paper then userWin = false //compChoice if scissor then userWin = true  
        }else if(userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true ;   //compChoice if scissors then userWin = false //compChoice if rock then userWin = true;
        }else {
            //userChoice = scissors
            //compChoice = rock , paper
            userWin = compChoice === "rock" ? false : true;        //compChoice if rock then userWin = false //compChoice if paper then userWin(scissors) = true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
}

choices.forEach((choice) => {
    // console.log(choice);
        choice.addEventListener("click", () =>{
            const userChoice = choice.getAttribute("id");                             //User Choice was clicked
            playGame(userChoice);
        })
});