marvel_heroes = ["thor","hulk","ironman"]
dc_heroes = ["superman","batman","flash"]

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);

//const allheroes = marvel_heroes.concat(dc_heroes)
//console.log(allheroes);

const allnewheroes = [...marvel_heroes,...dc_heroes]
console.log(allnewheroes);

const anotherarr = [[1,2,3],4,5,[6,7,[8,9]]]
const real_anotherarr = anotherarr.flat(Infinity)
//console.log(real_anotherarr);

//console.log(Array.isArray("hitesh"));
//console.log(Array.from("hitesh"));
//console.log(Array.from({name : "hitesh"}));//interesting

let score1 = 100
let score2 = 200
let score3 = 300
//console.log(Array.of(score1,score2,score3));
