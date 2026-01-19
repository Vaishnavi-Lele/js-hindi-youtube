const userEmail = []
// if(userEmail){
//     console.log("got user email");
    
// }else {
//     console.log(("don't get email"));   
// }


//falsy values
// false , 0, -0, BigInt, 0n,"", null, undefined, NaN

//truthy values
//"0", 'false', " ",[], {}, function(){}

// if(userEmail.length === 0){
//     // console.log("Array empty");
    
// }

// const emptObj = {}
// if(Object.keys(emptObj).length === 0) {
// console.log("OBJ EMPTY");

// }

// nullish coalescing operator (??):null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

