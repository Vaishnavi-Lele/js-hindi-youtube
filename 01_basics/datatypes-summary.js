// Primitive

// 7 categories:- String , number, boolean, null, undefined, Symbol, BigInt

// js is dynamically typed language

const score = 100
const scorevalue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

//symbol:-
const id = Symbol('123')
const anotherId = Symbol('123')
   // console.log(id === anotherId);

    const bigNumber = 123569874563256n
// Non-primitive or reference type
//arrays , objects, functions

//array, Objects, Functions
// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: " vaishnavi",
//     age: 21,
// }
 
// const myFunction = function() {
//     console.log("hello world");
// }

// console.log(typeof bigNumber);

//***************************

//memory types
//Stack (primitive) changes can not occur in original memory changes occur in copy file,
//Heap (Non-Primitive) changes occur in original memory . we get reference of memmory through original memory
let myYoutubename = "vaishnavilele" //primitive datatype =string
let anothername = myYoutubename 
anothername = "chaiaurcode" //string
console.log(myYoutubename);
console.log(anothername);

 let userOne = { //non-primitive = object
    email:"user@google.com",
    upi: "userAybl",
 }
 let userTwo = userOne

 userTwo.email = "abcd@gmail.com"
 console.log(userOne.email);
 console.log(userTwo.email);
 
 