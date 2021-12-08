let userName = 'Ju';
userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');

let userQuestion = 'Holiday forever?';
console.log(`${userName} asked ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

if (randomNumber === 0){
  eightBall = 'It is certain';
} else if (randomNumber === 1){
  eightBall = "For sure!";
} else if (randomNumber === 2){
  eightBall = "Cry in misery!";
} else if (randomNumber === 3){
  eightBall = "You wish!"
} else if (randomNumber === 4){
  eightBall = "Of course! hehe";
} else if (randomNumber === 5){
  eightBall = "In your dreams!";
} else if (randomNumber === 6){
  eightBall = "I can not tell you";
} else {
  eightBall = "Maybe...";
}


console.log(`The eight ball answered: ${eightBall}`);


