// Rest Parameter: it gathers up "the rest" of the arguments passed to a function into an array.

function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 300, 500, 9000));

function calculateCartPrice2(val1, val2, ...num2) {
    return num2;
}

console.log(calculateCartPrice2(200, 300, 500, 9000));

// functions with array and objects

// pass object to function

const user = {
    username: "Saggy",
    prices: 2999
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: "Sam",
    price: 3999
});

// pass array to a function

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 100, 600])); // can pass arrray directly


