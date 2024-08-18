// var c = 300

let a = 100 // Global scope

if(true) {
    let a = 10
    const b = 20
    // var c = 30
    console.log("Inner: ", a); // Local scope
}

console.log(a);
// console.log(b);
// console.log(c);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// // understand scope in detail
function one(){
    const username = "saggy"

    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
}
one()

// another example for scope

if(true) {
    const myname = "Test"
    if(myname === "Test") {
        const mysite = " twitter"
        console.log(myname + mysite);
    }
    // console.log(mysite); // will show error because `mysite` is used out of its scope
}

// console.log(myname); // will show error because `myname` is uesd out of its scope

// ........... Interesting ==> Hoisting Basics ............/
// normal function
console.log(addOne(5))
function addOne(num) {
    return num + 1;
}

// function in a variable
// console.log(addTwo(5)) // cant call this function before its storing in a varibel and this concept will appear in hoisting later on
const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(5))


