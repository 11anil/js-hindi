const user = {
    username : "Anil",
    price : 999,

    welcomemessage : function(){
        console.log(`${this.username} , Welcome to Website`);
        // console.log(this);   // this function talks about current context
    }
}

// user.welcomemessage()
// user.username = "Mohit"
// user.welcomemessage()

// console.log(this);

// function chai(){
//     let username = "Anil"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "ANil"
//     console.log(this.username);
// }
// chai()

const chai = ()=> {
    let username = "ANil"
    console.log(this);
}
// chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addtwo(3,4));


//implicit return : in this method you dont need curly brackets if the statement was one line only as we see in the following statement even we dont need to specify return statement.

// const addtwo = (num1, num2) =>  num1 + num2
// const addtwo = (num1, num2) =>  (num1 + num2)


// explicitly return : where you need to specify under curly brackets.

const addtwo = (num1, num2) =>  ({username : "Anil"})
    

console.log(addtwo(3,4));