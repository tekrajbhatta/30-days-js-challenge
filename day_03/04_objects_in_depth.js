// console.log("Object in depth");

// const tinderUser = new Object(); // singleton object // no different than real object only the declaration way is different
const tinderUser = {}; // non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Saggy",
            lastname: "Boy"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname + " " +  regularUser.fullname.userfullname.lastname);

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'x', 4: 'y'};
const obj4 = {5: 'm', 6: 'n'};

// const obj3 = { obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2, obj4); // using `{}` as the first parameter will combine to one sinlge object // If we dont use `{}` as first parameter all the values are being stored to obj1

const obj3 = {...obj1, ...obj2, ...obj4}; // rather than using above Object.assign() method we can use spread operator as in this example
console.log(obj3);

const users = [
    {
        id: 1,
        email: "saggy@123.com"
    },
    {
        id: 2,
        email: "22saggy@123.com"
    },
    {
        id: 3,
        email: "333saggy@123.com"
    },
    {
        id: 4,
        email: "444saggy@123.com"
    }
]

console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // gives the keys of an object in an array
console.log(Object.values(tinderUser));  // gives the values from an object in an array format

console.log(Object.entries(tinderUser)); // converts the key and value in an array format as in the example // each element of array will be an array with key and value from the object

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check if the property of an object exist?

