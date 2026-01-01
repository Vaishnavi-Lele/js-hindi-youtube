//array

const myArr = [0, 1, 2, 3, 4 ]
const myHeros = ["Army" , "navy" , "Air Force"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

//Array methods

// myArr.push(6) 
// myArr.push(7)
// myArr.pop() //deletes last inputed elements
//add elements

//myArr.unshift(9) // adds in the beginings (in the 0th index) of array
// myArr.shift() // in shift we do not give any argument . It displays original array and deletes which we have add after 
// console.log(myArr.includes(9)); // tells is it contain no 9 results in boolean
// console.log(myArr.indexOf(3)); // tells index position of the no in brackets

const newArr = myArr.join() //adds all the elements in the string
// console.log(myArr);

// console.log(newArr);
// console.log(typeof(newArr)); // o/p:- string. that means type is changed

//slice,splice

//console.log("A", myArr);
const myn1 = myArr.slice(1, 3) // prints 1 to 3 indexes. it includes no in index 1 and 2 not prints no in index 3
//console.log(myn1);
//console.log("B", myArr);

const myn2 = myArr.splice(1,3)
//console.log("c", myArr);

//console.log(myn2);
 // what is the diff bet^n slice and spice = slice prints the no which we have given in the brackets (indexes).
 // slice does not affect original array
 // and splice affect original array . It manipulate original array. 

