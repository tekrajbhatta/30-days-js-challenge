// Loops: for, break and continue
// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
    
}

// // console.log(element); // Cant use element here outside of scope

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j );
   }   
}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        break // will break the control flow out of the for loop
    }
//    console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue // will continue the control flow but will skip for the condition // it means it wont run the code below continue when the index is 5 and will continue for others
    }
   console.log(`Value of i is ${index}`);
}