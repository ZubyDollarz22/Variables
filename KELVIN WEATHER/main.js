var kelvin = 0; // output: 293, it prints the integer

var celsius = kelvin - 273; //output: 20, celsius minus' 273 from kelvin
var fahrenheit = celsius * (9 / 5) + 32;
//Fahrenheit first solves the bracket and multiplies then add.
fahrenheit = Math.floor(fahrenheit);
//the .floor() method rounds down the Fahrenheit decimal number
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33 / 100);
// converting to newton

newton = Math.floor(newton);
//rounding down 

console.log(`The temperature is ${newton} degrees Newton.`)