let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(typeof mydate);

//let mycreateddate = new Date(2023,0,6,8,9)
console.log(mycreateddate.toLocaleString());

//let mycreateddate = new Date("01-03-2025")
//let mycreateddate = new Date("2025-05-03")
//let mytimestamp = date.now()
console.log(mytimestamp);
console.log(mycreateddate.gettime());
console.log(Math.floor(Date.now()/1000))

newdate.toLocaleString('default',{
    weekday : "long"
})