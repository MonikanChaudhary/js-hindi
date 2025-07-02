const user = {
    username : "hitesh",
    price : 699,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to this website`);
        console.log(this);
    }
}
user.welcomemessage()
user.username = "sAM"
user.welcomemessage()

//console.log(this);

//function chai(){
  //  let username = "hitesh"
    //console.log(this.username);
//}

//chai()

const chai = () => {
    let username = "hitesh"
    console.log(this);
}
chai()

//const addtwo = (num1,num2) => {
  //  return num1+num2

//}

const addtwo = (num1, num2) => num1 +num2
const addtwo = (num1, num2) => (num1 +num2)
console.log(addtwo(3,4));
