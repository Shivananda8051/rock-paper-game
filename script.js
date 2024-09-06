let userscore =0;
let compscore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const genComchoice = () => {
    //rock paper,seasor
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);  //0,1,2
    return options[randIdx]; // returns index number
}

const drawGame = () => {
    // console.log("Match draw.");
    msg.innerText = "Match Draw, Play again.";
    msg.style.backgroundColor = "yellow";
}

let showWinner = (userWin, userchoice,compchoice) => {
    if(userWin) {
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText = `You Win! ${userchoice} beats ${compchoice} `;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorePara.innerText = compscore;
        msg.innerText = `You lose, ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    // computer choice -> modular way
    const compchoice = genComchoice();

    if(userchoice === compchoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userchoice === "rock") {
            // scissors, paper
            userWin = compchoice =="paper" ? false :true;
        } else if(userchoice==="paper") {
            // rock,scissors
            userWin = compchoice === "scissors"?false:true;
        } else {
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin,userchoice,compchoice);
    }
}


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        // console.log("Clicked",userchoice);
        playgame(userchoice);
    });
});
