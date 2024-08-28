
// Implicit vs. Explicit Return in JavaScript:

// 1) For Regular Function
// a) Explicit Return:
// An explicit return occurs when a function uses the return statement to specify the value that should be returned. This is clear and intentional.

function add1(a, b) {
    return a + b;  // This is an explicit return.
}

const sum1 = add1(3, 4);  // sum will be 7
console.log(sum1);

// In this example, the return a + b; statement explicitly returns the sum of a and b to the caller.

// b) Implicit Return:
// An implicit return happens when a function doesn't use the return statement. In such cases, the function automatically returns undefined. This is the default behavior in JavaScript.

function add2(a, b) {
    a + b;  // No return statement, so this function implicitly returns undefined.
}

const sum2 = add2(3, 4);  // sum will be undefined
console.log(sum2);

// In this example, because there is no return statement, the function implicitly returns undefined.

// 2) Arrow Functions and Implicit Return:
// In arrow functions, you can have an implicit return without using the return keyword if the function body is written in a concise form (without curly braces).

const add3 = (a, b) => a + b;  // Implicit return of a + b

const sum3 = add3(5, 4);  // sum will be 7
console.log(sum3);

// Here, a + b is implicitly returned without using the return keyword. This only works when the function body is a single expression and you omit the curly braces {}.