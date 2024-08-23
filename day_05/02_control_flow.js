// if else, switch, truthy/falsy values

// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

// Switch Statements

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        // break;
    case "feb":
        console.log("feb");
        // break;
    case "march":
        console.log("march");
        // break;
    case "april":
        console.log("april");
        // break;

    default:
        console.log("default case match");
        break;
}

// Question: What if we dont use the break in each case?
// Answer: It will execute other cases too after the matching case except the default case. To see the result just comment the break on each cases and see the result.

// Truthy and Falsy value
const userEmail = [] // considers empty array as truthy value

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

const userPhone = "" // considers empty string as falsy value

if (userPhone) {
    console.log("Got user phone");
} else {
    console.log("Don't have user phone");
}

// Rules which determines truthy and falsy values
// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// Check if an array is empty or not
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// Check if an object is empty or not
// const emptyObj = {}
const emptyObj = {
    name: "saggyboy",
    email: "saggy123@gmail.com"
}

console.log(Object.keys(emptyObj)); // Returns the keys of an object in an array

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
} else {
    console.log("Object is not empty");
}

// Tip: These three comparisions are true
// false == 0 // outputs true
// false == '' // outputs true
// 0 == '' // outputs true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")