let myarr = [0,1,2,3,4,5]
console.log(myarr);

let myarr2 = new Array(1,2,3,4)
console.log(myarr2);
console.log(myarr(2));
//array methods

myarr.push(7)
myarr.pop()
myarr.unshift(9)//add in start
myarr.shift()//remove 9
console.log(myarr.includes(8));
console.log(myarr.indexOf(9))//if no present -1
console.log(myarr);
const newarr = myarr.join()
console.log(newarr)
// it gives answer in string
//slice and splice
console.log("a",myarr);// a [0,1,2,3,,4,5]
const myn1 = myarr.slice(1,3) 
console.log(myn1);// [1,2]
console.log("b",myarr);//b [0,1,2,3,,4,5]

const myn2 = myarr.splice(1,3)
console.log(myn2);//[1,2,3]
console.log("c",myarr);//c [0,4,5]
