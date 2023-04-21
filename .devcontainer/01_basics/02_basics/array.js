const myarr = [0,1,2.3,true,"javascript"]
// console.log(myarr[2]);

//Array methods

// myarr.push(9)
// console.log(myarr);
// myarr.pop()
// console.log(myarr);
// myarr.unshift(8)
// console.log(myarr);
// myarr.shift()
// console.log();
// console.log(myarr.includes(7));
// console.log(myarr.indexOf("javascript"));

// const newarr = myarr.join()
// console.log(myarr);
// console.log(typeof(myarr));

const myn1 = myarr.slice(1,3)

console.log(myn1);
console.log("b", myarr);

const myn2 = myarr.splice(1,3)
console.log(myn2);
console.log("c",myarr);


// difference between splice and slice method is
 //splice methode manipulates the original array and slice method not