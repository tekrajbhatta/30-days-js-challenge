
function sayMyname() {
    console.log("S");
    console.log("a");
    console.log("g");
    console.log("g");
    console.log("g");
    console.log("y");
}

// sayMyname();

// function addTwoNum(num1, num2) {
//     console.log(num1 + num2);
// }

function addTwoNum(num1, num2) {
    
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}


const result = addTwoNum(5, 4);

// console.log("Result: ", result);

function loginUserMessage(username = "User") {
    // if(username === undefined) {
    if(!username) {
        console.log("Please enter username");
        return;
    } else {
        return `${username} just logged in`
    }
}

// console.log(loginUserMessage("Saggy"));
// console.log(loginUserMessage("")); // will print as normal value
console.log(loginUserMessage()); // will output undefined if we dont pass anything
console.log(loginUserMessage("Saggy"));

