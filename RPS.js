function getComputerChoice() {

    let ran = Math.floor(Math.random() * 3) + 1;
    switch(ran) {
        case 1:
            console.log("c returned rock");
            return "rock";
        case 2:
            console.log("c returned scissors");
            return "scissors";
        case 3:
            console.log("c returned paper");
            return "paper";
    }
}

function play(pselect, cselect) {
    let win = true;
    //make all lowercase
    pselect = pselect.toLowerCase();
    cselect = cselect.toLowerCase();

    if(pselect === "rock" && cselect === "scissors") {
        win = true;
        console.log("You win!");
    }
    if(pselect === "paper" && cselect === "rock") {
        win = true;
        console.log("You win!");
    }
    if(pselect === "scissors" && cselect === "paper") {
        win = true;
        console.log("You win!");
    }
    else {
        win = false;
        console.log("You lose! "+cselect+" beats "+pselect+"!");
    }

    return win;
}

function bof() {
    alert("Welcome to Rock Paper Scissors! You will be playing aganst the computer for the best of 5 games! Good luck!");
    let games = 0;
    let wins = 0;
    let loss = 0;
    while(games < 5 || wins < 3 || loss < 3) {
        let pselect = prompt("Please enter 'rock', 'paper', or 'scissors'");
        let cselect = getComputerChoice();
        if(play(pselect, cselect) == true)
            wins++;
        else 
            loss++;
        games++;
    }
}

bof();