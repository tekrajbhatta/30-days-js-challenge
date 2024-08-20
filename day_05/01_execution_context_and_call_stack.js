console.log("Execution context and call stack");

// Three Types of Execution Context
// Global Execution Context
// Functional Execution Context
// Eval Execution Context(It is used in Mongoose)
// Value of `this` keyword in the browser is Window object


/***** Some code in Javascript *****/
// This code executes in two phases and which are Memory Creation/Allocation Phase and Execution Phase
// Memory Creation/Allocation Phase => In this phase the memory allocation for variables.. etc is done
// Execution Phase => Code is executed in this phase


/***** Example code to understand the execution context and call stack *****/
let val1 = 10
let val2 = 5
function addNum(num1, num2) {
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

console.log(result1);
console.log(result2);

// Execution Context


// How this code will execute in JS?
// 1) Global Execution
// => In this phase the code is allocated in a `this` keyword 
// 2) Memory phase
// In this phase, at first, the value in the variables is stored as `undefined` 
// Line1: the value of `val1` is stored as `undefined`
// Line2: val2 => undefined
// Line3: addNum => In this line the function is declared only and not called so only the function definition is stored in the addNum
// Line7: result1 => undefined
// Line8: result2 => undefined
// 3) Execution phase
// In this phase, the values for the variables are stored
// Line1: val1 <-- 10 // In the val1 variable the value is stored
// Line2: val2 <-- 5 // In the val2 variable the value is stored
// Line3-6:  Here nothing will happen because there is nothing to execute. And we have already hold the definition of this fxn
// Line7: result1 <-- addNum
// Here in the line 7, the value of result1 should be stored as the addNum but it is a function so it creates a `new executional context` as:-
// New variable environment + Execution thread // To run a function it creates new execution context and the two steps to run this code which are `Memory Phase` and `Execution Phase`
// a) Memory Phase(for addNum fxn)
// val1 => undefined
// val2 => undefined
// total => undefined
// b) Execution Phase
// num1 -> 10
// num2 -> 5
// total -> 15
// return statement returns the total value to global execution context
// result1 <- 15
// Here, the newly created Execution context is then auto deleted after it's work is done
// Line8: 
// Here is also the function so the above story for the addNum function in line 7 is repeated here as:-
// Creates new execution context in two phases as: New variable environment + Execution thread // To run a function it creates new execution context and the two steps to run this code which are `Memory Phase` and `Execution Phase
// val1 => undefined
// val2 => undefined
// total => undefined
// b) Execution Content
// num1 -> 10
// num2 -> 2
// total -> 12
// return statement returns the total value to global execution context
// result1 <- 12
// Here, the newly created Execution context is then auto deleted after it's work is done


// Call Stack

// For example, when a function is executed it is stored in the Global Execution context in the call stack and after the execution it is deleted
// But what If there is another function inside a function??
// For example, In a normal case, if there are two functions one() and two() they are executed as:-
// First, function one() is executed in the call stack and then its deleted. Similarly, the function two() is executed in the call stack and then it is deleted.
// Another Example with nested function, For example we have function two() inside the function one() and the function three() is inded the function two() as:-
// one() {
//     two() {
//         three()
//     }
// }
// In this case, LIFO is used for the execution context
// Here, the function three() is executed and then its deleted. Similary, then function two() is called and its deleted and then the function one() is executed and then it is deleted

// Go to Sources > Snippets > Add New Snippet > And add the code below to test the execution on `Call Stack`
// Need to save using CTRL+S in this snippet
function one() {
    console.log("fxn 1");
    two()
}
function two() {
    console.log("fxn 2");
    three()
}
function three() {
    console.log("fxn 3")
}

one()
two()

