// Immediately Invoked Function Expresssion (IIFE)
// IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined
// The function is wrapped in parentheses (function() { ... }), followed by () to immediately invoke it.
// Why IIFE? Sometimes the global declaration of variables creates the problem 
// IIFEs are commonly used to create private scope in JavaScript, allowing variables and functions to be encapsulated and inaccessible from outside the function.

// Normal funtion
function test() {
    console.log("Just a test");
}

test();

// IIFE function
// Named IIFE // Since this IIFE function has name `testOne` this is called named IIFE
(function testOne() {
    console.log(`This is the IIFE fxn`);
})(); // to write another IIFE function we need to end the statement using semicolon

// IIFE function in arrow function format
// Un-named IIFE // Since this IIFE function does not have a name it is called un-named IIFE 
( (name) => {
    console.log(`This is IIFE function with an arrow function ${name}`);
} )('Saggy')


