function saymyname(){
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("L");
}

// saymyname()

// function addtwonumbers(number1 , number2){
// }

// const result = addtwonumbers(3,4)


// console.log("Result is :" + result);



function addtwonumbers(number1 , number2){

    // let result = number1 + number2
    // // console.log("Anil");
    // return result

// Another way to return
   return number1 + number2

    
}

const result = addtwonumbers(3,4)


// console.log("Result is :" + result);

function loginusermessage(username = "mohit"){
    if(username === undefined){
        console.log("Please enter your name");
        return
    }
    return  `${username} just logged in`
}

// console.log(loginusermessage("Anil"));
console.log(loginusermessage("Anil"));

