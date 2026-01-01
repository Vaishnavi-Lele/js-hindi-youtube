const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3] [1]);

//const allHeros = marvel_heros.concat(dc_heros) //concat is used to add two arrays and return it as a new array so we have to declear a new array name and then perform concat keyword
//console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //works same as concat . but in carporate world this method is preferable more
//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //flat is used to merge arrays in 1 single array . like here in another_array we have created many arrays in single array. To reduce this complexity we use flat keyword 
//console.log(real_another_array); //we have to give how mwny depth we want to solve like 1,2 or 3. but we write infinity that system can count defth by its own 


console.log(Array.isArray("hitesh"))//tells if hitesh is an array or not. o/p:-false
//to convert it into array

console.log(Array.from("hitesh"))
console.log(Array.from({name: "hitesh"}));//interesting 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
