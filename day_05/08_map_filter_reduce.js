// Map, Filter and Reduce in Javascript
// Check this link too:- https://www.codewithharry.com/tutorial/map-filter-reduce-in-js/

// // Foreach revision
// const mynewNum = myNums.forEach( (num) => {
//     console.log(num);
//     return num;
// } )

// console.log(mynewNum);

// 1) Filter method: 
// The filter method in JavaScript is an array method that creates a new array with all elements that pass a test (provided as a function). 
// It is commonly used to filter out elements of an array based on a specified condition.
// Syntax
// array.filter(callback(element, index, array), thisArg)
// Key Points:
// Non-mutating: The filter method does not change the original array. It returns a new array with the filtered elements.
// Return of empty array: If no elements match the condition, filter returns an empty array.
// Common uses: Filtering based on a condition, such as finding all even numbers, filtering out certain values, etc.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 ) // will print numbers greater than 4

const newNums = myNums.filter( (num) => {
    // num > 4; // cant just write the condition, need to return value here
    // The filter method relies on the callback function to return true or false to determine if an element should be included in the new array.
    return num > 4
});

// Explanation:-
// The callback function (num) => { num > 4; } is supposed to return true or false for each element in myNums so that the filter method can determine whether to include that element in the newNums array.
// However, the function does not have an explicit return statement. As a result, it does not explicitly return true or false. Instead, it implicitly returns undefined.
// Since the function implicitly returns undefined for each element, the filter method interprets undefined as false, meaning no elements pass the test, and the filter method returns an empty array ([]).

// console.log(newNums);

const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums2 = [];
myNums2.forEach( (num) => {
    if (num > 5) {
        newNums2.push(num);
    }
})

// console.log(newNums2);
// console.log(myNums2);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Print books with genre History
let userBooks = books.filter( (bk) => bk.genre === 'History');
// console.log("Books with genre History are: ");
// console.log(userBooks);

// Print books with genre History and publish date greater than 1995
let userBooks1 = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
// console.log("Books with genre History and publish date greater than 1995 are: ");
// console.log(userBooks1);

// 2) Map Method
// The map method is a powerful and commonly used array method in JavaScript. 
// It creates a new array by applying a provided function to every element in the calling array. 
// The map method does not modify the original array; instead, it returns a new array containing the results of calling the provided function on each element.
// Syntax
// array.map(callback(element, index, array), thisArg)
// Parameters Explanation:
// callback: A function that is called for every element in the array. It takes three arguments:
// element: The current element being processed in the array.
// index (optional): The index of the current element.
// array (optional): The array that map was called on.
// thisArg (optional): A value to use as this when executing the callback function.


const mynewNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Question:- Add 10 on each element of the array
// A) using foreach method
// a) method 1 to use foreach loop 
const nuewNUmVlaues = [];
mynewNumers.forEach( (num) => {
    nuewNUmVlaues.push(num + 10);
});
// console.log(nuewNUmVlaues);

// b) method 2 to use foreach loop // If I want to modify the original array with new values
const mynewNumers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
mynewNumers1.forEach((num, index, arr) => {
    arr[index] = num + 10; // arr is the original array (mynewNumers1) here
});

// console.log(mynewNumers1);

// B) using Map method
// The map method returns a new array with the modified values, leaving the original array unchanged.
const newNumstest1 = mynewNumers.map( (num) => { return num + 10});
// console.log(newNumstest1);

// chaining of array methods
const newNumstest2 = mynewNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40);

// console.log(newNumstest2);

// // 3) Reduce Method
// The reduce method in JavaScript is a powerful array method that allows you to reduce an array to a single value by applying a function to each element (from left to right). 
// This method is particularly useful for tasks like summing up numbers, flattening arrays, counting occurrences, or accumulating values in some way.
// Syntax:
// array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
// Parameters Explained:
// callback: A function to execute on each element in the array. It takes four arguments:
// accumulator: The accumulated result from the previous callback execution. It holds the value of the previous operation.
// currentValue: The current element being processed in the array.
// currentIndex (optional): The index of the current element being processed.
// array (optional): The array reduce was called upon.
// initialValue (optional): A value to use as the first argument to the first call of the callback function. If no initialValue is supplied, the first element in the array will be used as the initial accumulator value, and reduce will start with the second element.
// Return Value:
// The single value that results from the reduction.

const myNumsReduce = [1, 2, 3]

const myTotal = myNumsReduce.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
}, 0);

// console.log(myTotal);

// Note:- when loop runs for the first time, the value of `acc` or `accululator` is `0` because we have given the initialValue as `0`
// But when the loop runs for the second time, the value of `acc` is the current value i.e. 0 + 1 = 1 in our case
// And so on... for the next time when loop runs, the value of `acc` is current value again

const myTotal1 = myNumsReduce.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal1);

// Shopping cart total price calculation example using Reduce Method
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);