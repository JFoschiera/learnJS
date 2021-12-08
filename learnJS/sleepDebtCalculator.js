const getSleepHours = day => {
  if (day === 'monday') {
    return 8;
  } else if(day === 'tuesday') {
    return 8;
  } else if(day === 'wednesday') {
    return 8;
  } else if(day === 'thursday') {
    return 8;
  } else if(day === 'friday') {
    return 8;
  } else if(day === 'saturday') {
    return 5;
  } else {
    return 8;
  }
};

const getActualSleepHours = () =>
 8 + 8 + 8 + 8 + 8 + 8 + 8;

const getIdealSleepHours = idealHours =>
  idealHours * 7;

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);

  if (actualSleepHours === idealSleepHours){
    console.log('You did it good');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You did it even more. You slept ' +(actualSleepHours - idealSleepHours) + ' hours more.');
  } else {
    console.log('You need more sleep! You slept ' + ( idealSleepHours - actualSleepHours) + ' less hours than you should.');
  }
};

calculateSleepDebt();






