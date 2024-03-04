const yourChoiceDisplay = document.querySelector('#yourchoice');
const computerChoiceDisplay = document.querySelector('#computerchoice');
const resultDisplay = document.querySelector('#result');
const buttons = document.querySelectorAll('button');
let yourChoice
let computerChoice
let result
let ourScore = 0
let machineScore = 0

buttons.forEach(buttons => buttons.addEventListener('click', (e) => {
    yourChoice = e.target.id;
    yourChoiceDisplay.innerHTML = yourChoice;
    generateComputerChoice();
    getResult();
    getScores();
}))

function generateComputerChoice() {
    const random = Math.floor(Math.random() * 3)//or we can use buttons.length 
    // console.log(random)

    if (random === 0) {
        computerChoice = 'Rock';
    }
    if (random === 1) {
        computerChoice = 'Paper';
    }
    if (random === 2) {
        computerChoice = 'Scissor';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === yourChoice) {
        result = "It's a Draw 😑"
    }
    if (computerChoice === 'Rock' && yourChoice === 'Paper') {
        result = "You Win 😁"
    }
    if (computerChoice === 'Paper' && yourChoice === 'Scissor') {
        result = "You Win 😁"
    }
    if (computerChoice === 'Scissor' && yourChoice === 'Rock') {
        result = "You Win 😁"
    }
    if (computerChoice === 'Rock' && yourChoice === 'Scissor') {
        result = "You Loss 😨"
    }
    if (computerChoice === 'Scissor' && yourChoice === 'Paper') {
        result = "You Loss 😨"
    }
    if (computerChoice === 'Paper' && yourChoice === 'Rock') {
        result = "You Loss 😨"
    }
    resultDisplay.innerHTML = result
}

function getScores() {
    if (result == "You Loss 😨") {
        machineScore++;
        document.getElementById('mscore').innerHTML = machineScore
    } else if (result == "You Win 😁") {
        ourScore++;
        document.getElementById('yscore').innerHTML = ourScore
    }
}