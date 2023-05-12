let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
//     console.log("Inner :", a);
// }
// console.log(a);
// console.log(b);
// console.log(a);
}    

function one(){
  const  username = "Anil"

    function two(){
     const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()
if(true){
    const username = "Anil"
    if(username === "Anil"){
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

console.log (addone(5)) // It can be done

function addone(num){
    return num + 1
}

// console.log(addtwo(5))  //Cannot access 'addtwo' before initialization

const addtwo = function(num){
    return num + 2
}
console.log(addtwo(5))


