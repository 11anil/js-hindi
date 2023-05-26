//forof
//{},[],""

const arr = [1,2,3,4,5]
for (const num of arr) {
//     console.log(num);
}

const greetings = "Namste duniya"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}

//maps  

// it is unique and order specific means in which 
// order you will enter it will only in that order
//  not same type of value it can stors.


Map = new Map()

Map.set('IN', 'INDIA')
Map.set('fr',"france")
Map.set('ch',"china")
Map.set('fr',"france")

// console.log(Map);

for (const [key , value] of Map) {
    // console.log(key , ':-' , value);
}

// const myobject = {
//     game1 : "Rc20" ,
//     game2 : "chess"
// }

// for (const [key , value] of myobject) {
//     console.log(key , ':-' , value);
// }