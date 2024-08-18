// console.log("arrows");
// `this` keyword
// The JavaScript `this` keyword refers to the object it belongs to
// It has different values depending on where it is used
// Alone, this refers to the global object // Global object is the Window object
// Inside an object, when a method is present, amd inside this method when this keyword is used, it represent the outer object 
// Inside a function it represent the global object but inside a object if this keyword is present inside a method, it represents that object
// In a function, in strict mode, this refers to undefined.

const user = {
    username: "Saggy",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// Arrow function

function test() {
    let username = "Testname"
    console.log(this);
    // console.log(this.username); // can't use this keyword inside a fxn
}

// test()

const test1 = function() {
    let username = "Testname"
    console.log(this);
    // console.log(this.username); // can't use this keyword inside a fxn
}

// test1()

const test2 = () => {
    let username = "Testname"
    console.log(this);
    // console.log(this.username); // can't use this keyword inside a fxn
}

// test2()

// // normal arrow function // Explicit return // It means the function uses the return keyword
// // Implicit means that which is very clear // normla meaning
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// // Arrow function with Implicit return ==> means one liner code as below in which we don't need to write the return keyword
// // Implicit means not very clear // normal meaning
// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => (num1 + num2);

// console.log(addTwo(3, 4));

// return object using arrow function
const substratTwo = () => ({username: "Saggyboy"}); // to retun from arrow function need to wrap objects with curly braces {} as in this example

// console.log(substratTwo());

// const myArray = [2, 3, 4, 5, 6, 7];
// myArray.forEach(() => {

// })

// // More on `this` keyword

// console.log("This is: ", this);

const testThis = {
    name: "Testname",
    email: "testemail@gmail.com",
    sum: function() {
        var add = 2+2;
        console.log("Sum of two digits is ", add);
        console.log("The email is: ", this.email);
        console.log("The value of this keyword inside this method inside an objecct is: ", this);
        return add;
    }
}
console.log(testThis.name);

console.log(testThis.sum());

console.log(this);




