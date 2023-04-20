let mydate = new Date();
// console.log(mydate);
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString);
// console.log(typeof mydate);

//  let mycreatedate = new Date(2023,0,20);
// let mycreatedate = new Date(2023,0,20,20,41);
//  let mycreatedate = new Date("04-20-2023");
//  console.log(mycreatedate.toLocaleString());


//  let mytimestamp = Date.now();
//  console.log(mytimestamp);
//  console.log(mycreatedate.getTime());
// console.log(Math.floor (Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default',{
    weekday:"long"
})