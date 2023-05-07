// const tinderuser = new Object()

const tinderuser = {}
console.log(tinderuser);


tinderuser.id = "123agc"
tinderuser.name = "Sammy"
tinderuser.isloggedIn = true

console.log(tinderuser);

//nesting in object//

const regularUser = {
    email:  "avcf@persongmail.com",
    fullname:{
        userfullname: {
           
             firstname: "Anil",
             lastname: "Kumar"
            }
      
    }
    
}
console.log(regularUser.fullname.userfullname.firstname)



// merging of objects


// const obj1 = {1: "a" , 2: "b"}
// const obj2 = {3: "c" , 4: "d"}
// const obj3 = {5: "e" , 6: "f"}


// // const Obj4 = Object.assign({}, obj1,obj2,obj3)
// const Obj4 = {...obj1,...obj2,...obj3}
// console.log(Obj4);


// const users = {
    
//     id : "123",
//     email : "h@gmail.com"
// }

//    users[1].email

   console.log(tinderuser);

   console.log(Object.keys(tinderuser));
   console.log(Object.entries(tinderuser));

   console.log(Object.hasOwnProperty('name'));