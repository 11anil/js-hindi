const useremail = []

if(useremail){
    console.log('got user email');
}
else{
    console.log("dont get user email");
}

// +++++++++++++++++++++++++++++++++-----+++++++++++++++++++++++++++


//falsy values

// false , 0 , -0 , BigInt , null , undefined , "" , NAN(NOT A NUMBER)

// truthy values

// "0" , " " , 'false' , [] , {} , function[]{}


// if(useremail.length === 0){
//     console.log('user email is empty');
// }

// const emptyobj = {} 
//     if(Object.keys(emptyobj).length === 0){
//         console.log("OBject is empty");
//     }

// +++++++++++++++++++++++++++++++++-----+++++++++++++++++++++++++++

    // Nullish  Coalescing Operator (??) : null undefined


    let val1;
    // val1 = 5 ?? 10 
    // val1 = null ?? 10
    // val1 = undefined ?? 3

    // val1 = null ?? 10 ?? 20
    // console.log(val1);

    // +++++++++++++++++++++++++++++++++-----+++++++++++++++++++++++++++

    // terniary operator

    // condition ? true : false

    const iceteaprice = 100
    iceteaprice <= 80 ? console.log("less than 80"): console.log("more than 80");

