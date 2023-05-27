const coding = ["js","ruby","java","py","cpp"]

// coding.forEach(function (val) {
// console.log(val);
// })

// coding.forEach( (item) => {  // using arrow fnctn
// console.log(item);
// }) 

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach((item,indx,arr) =>{
//     console.log(item,indx,arr);
// })

const MyCoding = [
    {
        LanguageFileName : "Java",
        Languagename : "java"
    },
    {
        LanguageFileName : "Javascript",
        Languagename : "js"
    },
    {
        LanguageFileName : "python",
        Languagename : "py"
    },
]

MyCoding.forEach((item => {
   console.log(item.Languagename);
}))
