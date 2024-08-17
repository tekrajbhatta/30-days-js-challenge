// console.log("objects studey");

// // singleton

// // object literals 

// // Object.create()

// symbol(one of the primitive data type)
const mySym = Symbol("key1")

const JsUser = {
    name: "Saggy",
    "full name": "Saggybottomboy",
    [mySym]: "mykey1",
    age: 18,
    location: "Kathmandu",
    email: "saggyboy@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof(JsUser[mySym]));

JsUser.email = "newsaggyemail@gmail.com"
console.log(JsUser.email);

// Object.freeze(JsUser);
JsUser.email = "newsaggyfreezeemal@gmail.com";

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());