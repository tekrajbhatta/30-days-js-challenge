// Arrays
console.log('array');

const myArr = [9, 8, 7, 1, 2, 3, 4, 5];
const myHeros = ["Ironman", "Spiderman", "Black Panther", "Deadpool"];

const myArr2 = new Array(11, 12, 13, 14, 15);
console.log(myArr[0]);

// Array Methods

myArr.push(6); // pushes an array element at the end of array
myArr.push(12); 

myArr.pop(); // removes the last element from an array

myArr.unshift(0); // adds an element at the beginning of an array

myArr.shift(); // removes the first element from an array

console.log(myArr.includes(9)); // check if an element is present or not in an array and return true

console.log(myArr.indexOf(7)); // returns the index of an array

const newArr = myArr.join();

console.log(myArr);
console.log(typeof myArr);

console.log(newArr);
console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // doesn't include end element // creates new from an array but doesn't impact the old array(Does not cuts the element from original array)

console.log(myn1);
console.log("B ", myArr);

const myn2  = myArr.splice(1, 3); // inlcudes last element and modifies the original array(cuts off that porttion from original array and origianal array is also affected)

console.log(myArr);
console.log(myn2);
// console.log("B ", myArr);

