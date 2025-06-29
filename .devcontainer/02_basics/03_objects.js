const mysym = Symbol("key1")

const jsuser = {
    name : "hitesh",
    age : 19,
    "full name":"hitesh choudhary",
    [mysym] : "key1",//[]
    email : "hitesh@google.com",
    location:"delhi",
    isloggedin : false,
    lastloggedindays : ["monday","tuesday"]
}

console.log(jsuser.email);
console.log(jsuser["full name"]);//preferred
console.log(jsuser[mysym]);
console.log(typeof jsuser.mysym);//string

jsuser.email = "hitesh@chatgpt.com"
Object.freeze(jsuser)
jsuser.email = "hitesh@microsoft.com"
console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello jsuser");
}
jsuser.greeting2 = function(){
    console.log(`hello jsuser ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());