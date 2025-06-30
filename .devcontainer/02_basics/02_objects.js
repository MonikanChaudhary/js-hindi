//const tinderuser = new Object{} // {}
const tinderuser = {}//{}
console.log(tinderuser);

tinderuser.id = "123abc"
tinderuser.name = "sam"
tinderuser.isloggedin = false
console.log(tinderuser.id);


const regularuser = {
    email : "some@.com",
    fullname : {
        userfullname : {
            firstname : "hitesh",
            lastname : "chaudhary"
        }
    }
}
console.log(regularuser);
console.log(regularuser.fullname);
console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1 :"a", 2 :"b"}
const obj2 = {3 :"c", 4 :"d"}

//const obj3 = {obj1 ,obj2}//similar problem to array
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);

const user = [
    {
        id : "1",
        email : "any123@.com"
    },
    {
        id : "1",
        email : "any123@.com"
    },
    {
        id : "1",
        email : "any123@.com"
    }
]

user[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

//console.log(tinderuser.hasOwnProperty('isloggedin'));
