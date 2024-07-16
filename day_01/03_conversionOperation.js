// String to Number conversion

let score = "30aa";

console.log(typeof score);

// Define datatype to convert string to number

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber);


// "33" => 33
// "33abc" => Nan
// true => 1; false => 0

// String to Boolean conversion

// let isLoggedIn = -1;
// let isLoggedIn = "";
let isLoggedIn = "saggy";


let boolIsLoggedIn = Boolean(isLoggedIn);

console.log(boolIsLoggedIn);
console.log(typeof boolIsLoggedIn);

// true => 1; false => 0
// "" => false
// "saggy" => true

// Nuber to String conversion

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);


/********************** Operations **********************/

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "Hello";
let str2 = " Saggy";

let str3 = str1 + str2;
console.log(str3);

console.log(1+2);
console.log(1+"2");
console.log("1"+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log(true);
console.log(+true);
// console.log(true+); // not allowed showing error in the code
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1);
console.log(num2);
console.log(num3);

let gameCounter = 100;
// gameCounter++;
++gameCounter;
console.log(gameCounter);


let yInc, xInc = 5;
yInc = ++xInc;
console.log('xInc is: ', xInc);
console.log('yInc is: ', yInc);

