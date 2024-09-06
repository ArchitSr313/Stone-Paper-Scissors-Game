let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScoreP=document.querySelector("#user-score");
const compScoreP=document.querySelector("#comp-score");

const getComChoice=()=>{
    const options=["rock","paper","scissors"];
    const randInd=Math.floor(Math.random()*3);
    return options[randInd];
};

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw! Play Again.";
    msg.style.backgroundColor="#081b31";

}
const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScoreP.innerText=userScore;
        console.log("user wins");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else{
        compScore++;
        compScoreP.innerText=compScore;
        console.log("computer wins");
        msg.innerText=`You Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame= (userChoice)=>{
    console.log("userchoice = ",userChoice);
    //generate computer choice
    const compChoice=getComChoice();
    console.log("comp choice =",compChoice);


    if (userChoice === compChoice) {
       drawGame();
    }else{
        let userWin =true;
        if(userChoice==="rock"){
            //scissors, paper
            userWin = compChoice ==="paper" ? false : true;
        }else if(userChoice ==="paper"){
            //rock, scissors
            userWin= compChoice ==="scissors" ? false : true;          
        }else{
            //rock,paper
            userWin = compChoice==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});