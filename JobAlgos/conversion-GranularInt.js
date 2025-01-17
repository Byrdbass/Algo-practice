// You will write an application that converts from one unit to another. 
// It will be invoked via function call given a source unit, a destination unit, and a value.

// At a minimum, it should provide conversions between (to and from):

// miles, kilometers, feet, inches

// pounds, tons, kilograms

// Fahrenheit and Celsius

// As bonus, include other units. Additionally as bonus,
// show how the application could be extended for custom units.

// You may use any tools/libraries/Googling at your disposal, with exception of libraries or
// packages that do unit conversions. Please spend no more than one hour on this exercise. 

// Unit conversion reference: https://www.unitconverters.net/

// Some reference conversions:

// 1 kilogram = 2.20462 pounds
// 1 pound = 0.453592 kilogram
// 1 ton = 2000 pounds
// 1 meter = 3.28084 feet
// 1 foot = 0.3048 meters
// 1 mile = 5280 feet
// 1 foot = 12 inches

// Degrees Celsius = (Degrees Fahrenheit - 32) * 5/9

const _ = require('lodash');
// take in an input of a specific number with a source unit
// out put to a certain value of a different destination unit
// we are simply converting one value in a function
// we will need setup mathmatic properties the given units, kilogram, pound, etc.
// we can assign these mathmatic propeties to methods
// these mathmatic properties are going to be products 
// assume the input is typed in as a full unit - i.e. kilogram spelled out <--
// we need to know the intial unit in order to do proper math
// taking in multiple parameters that need to be split

const convert = (source, destination, value) => {
  let answer = 0;
  // ERROR HANDLING
  if (typeof(value) !== 'number') {
    console.log('your input value is not a number');

    return;
  }

  const weight = ['ton','kilogram','pound']
  const temp = ['Celsius', 'Fahrenheit']
  
  if (weight.includes(source) && weight.includes(destination)) {
    // WEIGHTS!
    if (source === 'pound'  && destination === 'kilogram') {
      answer = value * 0.453592;
    } else if (source === 'kilogram' && destination === 'pound') {
      answer = value * 2.20462;
    } else if (source === 'ton'  && destination === 'pound') {
      answer = value * 2000;
    } else if (source === 'pound'  && destination === 'ton') {
      answer = value * (1/2000);
    } else if (source === 'ton'  && destination === 'kilogram') {
      answer = value * 907.185;
    } else if (source === 'kilogram'  && destination === 'ton') {
      answer = value * (1/907.185);
    } 
  }
  if (temp.includes(source) && temp.includes(destination)) {
    //TEMPERATURE!  
     if (source === 'Farhenheit'  && destination === 'Celsius') {
      answer = (value - 32) * 5/9;
    } else if (source === 'Celsius'  && destination === 'Fahrenheit') {
      answer = (value * 9/5) + 32;
    }
  }


  // else if (source === 'meter'  && destination === 'feet') {
  //   answer = value * 2000;


  // if the source unit is kilogram than do something

  // if the source unit is pounds do something
  


  console.log(answer.toFixed(2))
}

console.log('--- Weight Tests ---');
// Output should be '1'.
convert('pound', 'kilogram', 2.20462);
// Output should be ~2.
convert('pound', 'kilogram', 4.40924);

convert('pound', 'kilogram', 74);

convert('kilogram', 'pound', 5);

convert('ton', 'pound', 2);

convert('pound', 'ton', 6000);

convert('ton', 'kilogram', 1);

convert('kilogram', 'ton', 907.18);

console.log('--- Temperature Tests ---');
convert('Fahrenheit', 'Celsius', 32);

convert('Celsius', 'Fahrenheit', 38);

// Quasi-unit testing
console.log('--- Unit Testing ---');
convert('Celsius', 'pounds', 'snickers');
convert('Celsius', 'pounds', 100);


// function sayHello() {
//   console.log('Hello, World');
// }

// _.times(5, sayHello);



