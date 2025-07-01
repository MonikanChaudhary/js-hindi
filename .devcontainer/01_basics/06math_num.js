const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.tofixed(2));

const othernum = 22.3456
console.log(othernum.toPrecision(3))//if it was 1 it could be 2.2e+3

const hundreds = 100000000
console.log(hundreds.toLocaleString("en-in"))//for indian //10,000,000

//*********************maths *//

console.log(Math);//gives object [math]{}
console.log(Math.abs(-4));
console.log(Math.round(4.7));//5
console.log(Math.ceil(4.1));//5
console.log(Math.floor(4.9));//4
console.log(Math.max(1,5,6,4));
console.log(Math.min(1,4,3,2,4));
console.log(Math.random());//always between 0 and 1
console.log((Math.random()*10)+1)

const min =10
const max =20
console.log(Math.floor(Math.random()*(max-min+1))+min)