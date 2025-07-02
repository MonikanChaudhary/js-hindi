(function chai(){
    console.log("db connected")
})();//;important

//immediately invoked function expression
//it is use to solve the problem of  global scope pollution
((name) => {
    console.log(`db connected two ${name}`)
})("hitesh")