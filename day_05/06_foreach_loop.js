// The forEach method in JavaScript is used to execute a provided function once for each array element. 
// However, it does not return a new array or any value; instead, it always returns undefined

const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    // console.log(item);
    return item; // this return statement is not doing anything meaningful in this context because the forEach method does not use or return the values from the callback function.
} )

// console.log(values); // foreach itselft always returns undefined

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    // console.log(item.languageName + " file extension is: " + item.languageFileName);
    console.log(`${item.languageName} file extension is: ${item.languageFileName}`);
})