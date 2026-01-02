function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
//sayMyName()

// function AddNo(number1, number2) {

//     console.log(number1 + number2);
// }

function AddNo(number1, number2) {
    // let res = number1 + number2
    // return res
  return number1 + number2
}

const res = AddNo(3, 4)
//console.log("Result", res);

function loginUser(username = "sam"){
  if(username === undefined){
    console.log("Please enter a username");
    return
    
  }
  return `${username} just logged in`
}

//console.log(loginUser("hitesh"))

function calculateCarPrice(...num1){
  return num1
}
//console.log(calculateCarPrice(200, 400, 500))

const user = {
  username: "hitesh",
  price: 199
}
function handleObj(anyobject){
  console.log((`Username is ${anyobject.username} and price is ${anyobject.price}`));
  
}

handleObj(user)

const MyNewArray = [200, 300, 400, 100]

function returnSecondVal(getArray){
  return getArray[1]
}
console.log(returnSecondVal(MyNewArray));
