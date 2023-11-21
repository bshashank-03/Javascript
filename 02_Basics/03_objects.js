//Singleton
// Object.create

// object Literals

const mysym = Symbol("key1")

const jsuser = {
    name: "Shashank",
    "full name": "Shashank Bhushan",
    [mysym] : "key1", //symbol ko as a key use krne ka syntax
    age: 25,
    email: "shashank.b2803@gmail.com",
    isLoggedIn: false,
    lastLogIndays: ["Monday", "wednesday"]
}

// console.log(jsuser.email); //shashank.b2803@gmail.com
// console.log(jsuser["email"]);//shashank.b2803@gmail.com
// console.log(jsuser["full name"]);//shashank bhushan
// console.log(jsuser[mysym]);// key1

jsuser.email = "sb.bhu@google.com"// update object key value
// Object.freeze(jsuser) // lock the object
jsuser.email = "kajlglwnej.com"
// console.log(jsuser);

jsuser.greeting = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsuser.greeting());