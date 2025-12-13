const score = 400

const balance = new Number(100)
// console.log(balance);
// console.log(score);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));//point madhe value milte

const otherNumber = 123.89698
//console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')); // indian number system pramane commas dile jatat
// if we do not enter en-IN then US number system nusar commas dile jatat

//+++++++++++++++++ maths ++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.8));
// console.log(Math.ceil(4.8));
// console.log(Math.floor(4.8));
// console.log(Math.min(2,4,5,8));
// console.log(Math.max(2,4,5,8));

console.log(Math.random()); // 0 to 1 mathe ans yeta

console.log((Math.random()*10) +1); // point shift hota

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//floor ne round karte ani mg +1 use hota ki value 1 peksha chhota nako ani last la +min define karta ki 10 peksha mothi value havi ahe