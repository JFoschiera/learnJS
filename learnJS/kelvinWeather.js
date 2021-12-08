// Kelvin value
const kelvin = 0;

// celcius is equals to kelvin value minus 273
const celsius = kelvin - 273;

// Equation to revert celsius into farenheit
let fahrenheit = celsius * (9/5) + 32;

// rounding fahrenheit result down to nearest whole number
fahrenheit = Math.floor(fahrenheit);

// celsius to Newton
let newton = celsius * (33/100);

// rounding Newton result down to nearest whole number
newton = Math.floor(newton);

console.log('The temperature is ' + fahrenheit + ' degrees fahrenheit.');

console.log(newton);
