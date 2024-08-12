
// Stack(Primitive), Heap Memory(Non-primitive)
 
// Stack Memory Example // Here the value of the variable `myname` is not changed
let myName = "Saggybottomboy";

let anotherName = myName;
anotherName = "Tek Raj Bhatta";

console.log(myName);
console.log(anotherName);

// Heap Memory Example // Here the value of the `useOne.email` is changed
let userOne = {
    email: "saggy@gmail.com",
    phone: "123456789"
};

let userTwo = userOne;

userTwo.email = "tekrajbhatta@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);

