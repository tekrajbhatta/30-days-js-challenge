const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    // console.log(item);s
    return item
} )

// console.log(values);

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