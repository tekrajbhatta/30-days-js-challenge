// Play with strings

// console.log("Hello" + "World!");

const name = "Saggy";

const repoCount = 500;

// console.log(name + ": " + repoCount + " Views");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // backtics syntax is called template literals

const gameName = new String('saggy-boy');

// console.log(gameName);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('b'));

// console.log(typeof(gameName));

// console.log(gameName[0]);

// console.log(gameName.__proto__);

// substring
const newString = gameName.substring(0, 4); // Can't give negative vaue here
// console.log(newString);

// slice
const anotherString = gameName.slice(-8, 4); // Can give negative value too
// console.log(anotherString);

// trim
const newString1 = "  saggy     test";
console.log(newString1);
console.log(newString1.trim());

const url = "https://tekrajbhatt.com.np/tek%20raj";

// replace
console.log(url.replace('%20', '-'));

// includes // checks if the string is included or not in the given string
console.log(url.includes('saggy'));

// split
const stringToArray = new String('tek-raj-bhatta');

console.log(stringToArray.split('-'));

// startsWith // endsWith
const myTeam = 'Chelsea';
console.log(myTeam.endsWith('sea'));

console.log(myTeam.startsWith('Che'));