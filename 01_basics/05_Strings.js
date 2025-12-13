const name = "vaishnavi"
const repoCount = 2

// console.log(name + repoCount + "Value"); // outdated syntax not so good

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// declaration of string
const gameName = new String('vaishnavilele')
// console.log(gameName [0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('v'));

const newString = gameName.substring(0, 4)
console.log(newString);

const newStringOne ="   vaishnavi   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('lele'))
console.log(gameName.split(' '));
