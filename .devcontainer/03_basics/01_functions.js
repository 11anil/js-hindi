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
// console.log(loginusermessage("Anil"));

function calculatecartprice(val1,val2,...num1){  // in this case val1 and val2 will store the 200 & 400 value and the rest will give the  value in array form
                                                        // ... (rest operator)
     return num1
}
// console.log((calculatecartprice (200,400,800,2000)));

const user = {
    username : "Anil",
    price : 199
}

function handleanyobject(anyobject){
    console.log(`username is : ${anyobject.username} price is : ${anyobject.price}`);
}

// handleanyobject(user)

// handleanyobject({
//     username : "mohit",
//     price : 39
// })


const mynewarray = [200 , 400 ,900 ,300]
function returnsecondvalue(getarray){
    return getarray[2]
}
// console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([200 ,400 , 900 , 1000]));