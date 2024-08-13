// Dates // 01 Jan 1970 

let myDate = new Date();

console.log(myDate);
console.log(typeof(myDate));

console.log(myDate.toString());
console.log(typeof(myDate.toString()));

console.log(myDate.toDateString());

console.log(myDate.toISOString());

console.log(myDate.toJSON());
console.log(typeof(myDate.toJSON()));

console.log(myDate.toISOString());

console.log(myDate.toLocaleDateString());

console.log(myDate.toLocaleString());

console.log(myDate.toLocaleTimeString());

// let myCreatedDate = new Date(2024, 0, 23); // month starts from `0` in JS when we inserted it as random number
// let myCreatedDate = new Date(2024, 0, 23, 5, 3);
// let myCreatedDate = new Date("2023-01-14"); // In YY-DD-MM format months start from `1` 
let myCreatedDate = new Date("01-04-2023"); 
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1); // Month starts from 0 so people add 1 to show the real month to users
console.log(newDate.getDate()); // ouputs the day of the month
console.log(newDate.getDay()); // outputs the day of the week // output 3 means wednesday since it starts the day from monday

// `${newDate.getDay()} and the time`

let anotherDate = newDate.toLocaleString('default', {
    weekday: "long",
    // timeZone: ''
})

console.log(anotherDate);