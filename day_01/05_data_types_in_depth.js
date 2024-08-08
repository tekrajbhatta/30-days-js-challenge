// console.log('yes!');

// Two main types of data are primitive and non-primitive

// Primitive
// 7 types: string, number, boolean, null, undefined, symbol, bigint

// Non Primitive or Reference Type
// Types: array, objects, functions

// Question: Is JavaScript statically typed language or dynamically typed?
// JS is Dynamically typed language because it is not necessary to define the data type while declaring variable
// JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don’t need to declare the data type of a variable explicitly.

// Question: What does Weakly-Typed Language mean?
// JavaScript is also a weakly typed language, which means that the language allows you to perform operations between different data types without explicitly converting them.


// Primitve examples
const score = 100;
const scoreValue = 100.5;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // just defining the variable will store undefined as in this case

const id = Symbol('123');

const anotherID = Symbol('123');

// console.log(id);
// console.log(anotherID);
// console.log(id === anotherID);

const bigNumber = 45671823904871236n;

// Non primitive examples
// Data type of all non-primitive data type is object
const heros = ['Superman', 'Batman', 'Spiderman', 'Venom'];

let myObj = {
    name: "Saggy",
    age: 25,
}

const myFunction = function() {
    console.log("Hello World!");
}

console.log(typeof isLoggedIn);
console.log(typeof scoreValue);
console.log(typeof outsideTemp);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof Symbol);



