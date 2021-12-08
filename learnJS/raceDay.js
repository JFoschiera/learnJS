let raceNumber = Math.floor(Math.random() * 1000);
let earlyRunner = false;
let ageRunner = '33';

if (earlyRunner && ageRunner > 18){
  raceNumber = raceNumber += 1000;
}

if (earlyRunner && ageRunner > 18){
  console.log('You start at 09:30 am and your race number is ' + raceNumber);
} else if (!earlyRunner && ageRunner > 18){
  console.log('You start at 11:00 am and your race number is ' + raceNumber);
} else if (ageRunner < 18){
  console.log('You start at 12:30 am and your race number is ' + raceNumber);
} else {
  console.log('18 YO do not run :)');
}















