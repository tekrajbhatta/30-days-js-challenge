// Arrays
console.log('array12');

const marvelHeros = ["Thor", "Ironman", "Spiderman"];

const dcHeros = ["Superman", "Flash", "Batman"];

// // push
// marvelHeros.push(dcHeros);

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// // concat
// const allHeros =  marvelHeros.concat(dcHeros);
// console.log(allHeros);

// // spread operator
// const allNewHeros = [...marvelHeros, ...dcHeros];
// console.log(allNewHeros);

// // flat // speared all elementss inside of a nested array in a single array
// const anotherArray = [1,2,3, [4,5,6], 7, [6, 7, [4,5]]];
// const realAnotherArray = anotherArray.flat(Infinity);
// console.log(realAnotherArray);

console.log(Array.isArray("Saggy"));
console.log(Array.from("Saggy")); // Convert sting or object to an array
console.log(Array.from({name: "saggy"})); // interesting


let scrore1 = 100;
let scrore2 = 200;
let scrore3 = 300;

console.log(Array.of(scrore1, scrore2, scrore3));

