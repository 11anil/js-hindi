const score = 400
console.log(score);

const balance = new Number(400);
console.log(balance)

console.log(balance.toString().length);
// console.log(balance.toFixed(1));


const othernumber = 123.8976
// console.log(othernumber.toPrecision(4));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-In'));

// +++++++++++++++++++++++++Math+++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-11));
// console.log(Math.round(5.7));
// console.log(Math.ceil(5.1));
// console.log(Math.floor(5.9));
// console.log(Math.min(5.9,2,1));
// console.log(Math.max(5.9,2,1));

console.log(Math.random());
console.log((Math.random()*10) + 1 ); 
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
