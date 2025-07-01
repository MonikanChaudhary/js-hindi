function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500));

const user = {
    username : "hitesh",
    price : 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleobject(user)
handleobject({
    username : "sam",
    price : 299
})

const mynewarray = [200,300,400,100,400]

function returnsecondvalue(getarray){
    return getarray[1]
}
//console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([200,700,800]));