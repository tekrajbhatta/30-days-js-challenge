const score = 12345;
console.log(score);
console.log(score.toString());
console.log(score.toFixed(2));
console.log(typeof(score.toString()));

// Define the datatype exclusively
const balance = new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(typeof(balance.toString()));

console.log(typeof(score));
console.log(typeof(balance));

const newbalance = balance + 100;
console.log(newbalance);
console.log(typeof(newbalance));

// precision
const otherNumber = 1123.57868765;

console.log(otherNumber.toPrecision(3));

// toLocaleString
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

// max
console.log(Number.MIN_VALUE); // min value that we can use in JS
console.log(Number.MAX_VALUE); // max value that we can use in JS

// ++++++++++++++ MATHS +++++++++++++ //

console.log(Math);
console.log(Math.PI);

console.log(Math.abs(-4)); // -ve is converted to +ve with abs

console.log(Math.round(4.5)); // 5

console.log(Math.ceil(4.2)); // round to higher number
console.log(Math.floor(4.6)); // round to lower number

console.log(Math.sqrt(49)); // 7

console.log(Math.pow(5, 3)); // 125

console.log(Math.min(3, 5, 7, 9, 11, 13)); // returns the min value from an array // 3
console.log(Math.max(3, 5, 7, 9, 11, 13)); // retruns the max value // 13

// generate random value
console.log(Math.random()); // returns the value between 0 to 1 // can be 0 or 1 too

console.log(Math.random()*10 + 1);
console.log(Math.random()*10 + 1);

console.log(Math.ceil(Math.random()*10 + 1));
console.log(Math.floor(Math.random()*10 + 1)); // It will give the random value between 1 to 9 


// trick
console.log('Trick goes from here: to print the random value from 10 to 20');

const minValue = 10;
const maxValue = 20;

console.log(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);