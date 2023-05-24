//for
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(i==6){
        // console.log("6 is maximum in cricket");
    // }
    // console.log(element);


    // for (let i = 1; i <=10; i++) {
    //     console.log(`outer loop value = ${i}`);
    //     for (let j = 1; j <=10; j++) {
    //     //    console.log(`inner loop value  ${j} and inner loop ${i}`);
    //         console.log(i + '*' + j  + ' = ' + i*j);
//         }
//     }
// }
// let myarray = ['batman' , 'Ironman' , 'thor']
// console.log(myarray.length);
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);
// }

//break and continue

// for (let index = 1; index < 20; index++) {
//     if(index == 11){
//         console.log('11 detected');
//         break
//     }
//    console.log(`value of i is = ${index}`);
   
// }
for (let index = 1; index <= 20; index++) {
    if(index == 11){
        console.log('11 detected');
       continue
    }
   console.log(`value of i is = ${index}`);
   
}
