// Temperature conversions program Codecademy

// temperature in kelvin, this will stay constant
const kelvin = 280;
// temperature in celsius we are subtracting kelvin from it.
const celsius = kelvin - 273;
//temperature in fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// temperature in newton
let newton = celsius * (33 / 100);
// number in whole numbers
newton = Math.floor(newton);
// Floors the temperature so it's in whole numbers
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is  ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${newton} degrees Newton.`);
