// Variables

var studentAge = 30;
console.log('The value of age is: ', studentAge);
console.log('Type of studentAge is: ', typeof(studentAge));


let studentName = 'Saggy';
console.log('The value of studentName is: ', studentName);
console.log('Type of studentNames: ', typeof(studentName));

const studentRoll = 25;
console.log('The value of studentRoll is: ', studentRoll);
console.log('Type of studentRoll is: ', typeof(studentRoll));

// console everything at once
console.table([studentAge, studentAge, studentRoll]);

// a = 40;
// b = "Bhatta";
// c = false; // not allowed

// console.log(a);
// console.log(b);

/* Prefer not to use var 
because of the functional scope 
In easy words, functional scope is anything that uses {}, for example "function abc(){}", "if(abc>0){}" .... etc
*/

var arrayA = ['a', 'b', 'c', 'd', 'e'];
console.log('The value of arrayA is: ', arrayA);
console.log('Type of arrayA is: ', typeof(arrayA));
