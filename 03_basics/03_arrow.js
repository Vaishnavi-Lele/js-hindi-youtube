const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function()
{
    // console.log(`${this.username}, welcome to website`);
    //  console.log(this); // 'this' is used to access current context
    //current context:- 
}
}

// user.welcomeMessage()
// user.username = "sam" // value(context) changed by name sam 
// user.welcomeMessage()
//console.log(this);

// function chai() { // we do not use this keyword in function we can only use it in object
//     let username = "vaishnavi"
//     console.log(this.username);
    
// }
// chai()

// const chai = function () {
// let username = "vaishnavi"
//     console.log(this.username);
    
// }
// chai()

// const chai = () => { //just remove function keyword from function and add => arrow . by adding arrow we get arrow function
// let username = "vaishnavi"
//     console.log(this); //
    
// }
// chai()

// const addTwo = (num1, num2) => {
//      return num1 + num2
//  }
//  const addTwo = (num1, num2) => (num1 + num2) // implicite return where we do not have to write return keyword
// if we wrap in curly braces{} then we have to write return keyword . if we wrap in paranthesis () then we do not have to write retuen keyword
// console.log(addTwo(3, 4))

//explicite return means we have to use return keyword and implicite means we do not have write return keyword

const name = () => ({username: "hitesh"})
console.log(name.username)