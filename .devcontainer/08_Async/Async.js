//imp note:

//sync code - pehle ek khatam task then dusra start ek ke baad ek.
//Async code - start ek sath commands but finish one at a time  ///means two or more than two works can be done at a same time.

//Async code syntax
// setTimeout(callback function(){},timeinmiliseconds)

//Callback is a function it it called callback because it will called after a specific given time in the code
//callbsack fnctn ek aisa fnctn hota hai jo async code ke completion pr chalta h


// console.log("hey");
// setTimeout(function(){
//     console.log("hey 2");
// },2000)



//callback function hmesha async code mein answer anne ke baad chalta hai
//jo bhi main stack pr hota hai vo output karta hai or jo side stack par hota hai vo behind the scenes processing kar sakta hai or jab uski processing khtm ho use main stack me lake chalaya ja skta hai
//main stack => excecution

// synchronous code always moves on main stack
// jab main stack complete ho jata h ya khali ho jata hai tab side stack me jaya jata hai
//eventloop main stack se side stack me cheeze leke aata hai

//example 

// console.log('HEY');
// console.log("hey 2");
// setTimeout(function(){
//     console.log("hey3");
// },0)
// console.log("hey4");


//in this example hey , hey 2 , hey 4 is a sync code that's why it will come first and hey 3 will come last

//js is a single threaded language not a multithreaded means a single process can done at a  single piece of time.

//fetch
//XMLHttpsRequest
// axios
// promises
// setTimeout
// setInterval

// if u are writing any of these than u are writing async code

//inka answeer chalane ke liye hota hai

//callbacks
//then catch
//async await

//promise 
var ans = new Promise((res,rej)=>{
    if(true){
        return res();
    }else{
        return rej();
    }
})

ans
.then(function(){
    console.log("resolve hogaya tha");
})
.catch(function(){
    console.log("reject hogya tha");
})


