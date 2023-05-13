//Immediately Invoked function expression  (IIFE)


//Sometimes we have a problem in global scope pollution so for removal of that pollution , we use IIFE.


(function chai(){
    //Named IIFE

    console.log(`Db Database`);
}) ();

((Name)=>{
    console.log(`Db Database two ${Name}`);

})(`Anil`)
 

