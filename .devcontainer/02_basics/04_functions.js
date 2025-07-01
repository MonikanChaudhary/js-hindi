
function saymyname(){
    console.log("i");
    console.log("i");
    console.log("i");
    console.log("i");
    console.log("i");
}

//saymyname()  

//function addtwonumbers(number1,number2){
  //  console.log(number1+number2);
//}

//addtwonumbers(3,"4")//34

const result = addtwonumbers(3,5)
console.log(result);//undefined

//function addtwonumbers(number1,number2){
  //  let result = number1+number2;
    //return result
//}

//function loginusermessage(username){
  //  return `${username} just logged in`
//}
//console.log(loginusermessage("hitesh"));//gives the answer

function loginusermessage(username = "sam"){
    if (!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginusermessage("hitesh"));

