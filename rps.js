const getUserChoice = (userInput) => {
    if (userInput ==='rock' || userInput === 'paper' || userInput === 'scissors') {
        console.log(userInput.toLowerCase());
        return userInput
    }else {
        alert('please type the correct input');
    }
};
getUserChoice("paper");

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log(randomNumber);
    if(randomNumber === 1) {
        console.log('rock');
        return 'rock'
    }else if (randomNumber === 2) {
        console.log('paper');
        return 'paper'
    }else if(randomNumber === 3) {
        console.log('scissors');
        return 'scissors';
    }
};

console.log('computer choice:', getComputerChoice());

const determineWinner = (userInput, computerChoice) => {
    if(userInput === computerChoice) {
        return 'Tie'
    }else if(userInput === 'rock' && computerChoice === 'scissors' || userInput === 'paper' && computerChoice === 'rock' || userInput === 'scissors' && computerChoice === 
    'paper') {
        return "Win"
    }else if(userInput === 'rock' && computerChoice === 'paper' || userInput === 'paper' && computerChoice === 'scissors' || userInput === 'scissors' && computerChoice === 'rock') {
        return 'Lose'
    }
}

console.log(determineWinner())

const playGame = () => {
    const userChoice = getUserChoice('rock');
    console.log('userChoice', userChoice);
    const computerChoice = getComputerChoice();
    console.log('computerChoice'. computerChoice);
    return determineWinner(userChoice, computerChoice);
}

const x = playGame()
console.log(x)