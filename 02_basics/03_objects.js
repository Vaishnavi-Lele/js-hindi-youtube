//singleton made using constructors 

//object literals

// interview Question:-use symbol as object keys and print the o/p

const mySym = Symbol("key1")//we do not use symbol directly as element
//if we directly used in object mySym:"myKey1" then it will give the o/p but datatype will be string it will not Symbol
//to use as Symbol we should do  [mySym]: "mykey1"
const JsUser = {
    name: "hitesh",
    "full Name": "Vaishnavi Lele",
    [mySym]: ("mykey1"),
    age: 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "hitesh@facebook.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user");
    
}
JsUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

