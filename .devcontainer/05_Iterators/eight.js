const mynum = [1,2,3]

// const mytotal = mynum.reduce(function (acc,currval) {
//     console.log(`acc is : ${acc} and currval is ${currval} `);
//     return acc + currval
// },0)

const mytotal = mynum.reduce((acc,currval) => acc+ currval,0)

console.log(mytotal);

const shoppingcart = [
    {
    course : "Js",
    price : 999,
},
{
    course : "devops",
    price : 9999,
},
{
    course : "mern-stack",
    price : 5999,
},

]

const pricetopay = shoppingcart.reduce((acc,item) => acc+item.price,0)
console.log(pricetopay);