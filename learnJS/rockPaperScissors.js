const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb'){
    return userInput;
  }else{
    console.log('Input not valid');
  }
}

const getComputerChoice = () => {
 const randomNumber = Math.floor(Math.random() * 3);
   switch (randomNumber){
    case 0:
      return 'paper';
      break;
    case 1:
      return 'scissors';
      break;
    case 2:
      return 'rock';
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'The game was tie!';
  }

  if(userChoice === 'bomb'){
    return 'you fucking won!';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }

};

const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('User: ' + userChoice);
    console.log('Compu: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
