
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100   /* Javascript is dynamically typed language*/

const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

//ARRAYS//
const heros = ["shaktiman", "naagraj", "doga"];

//OBJECTS// {everything inside curly braces is object}
let myObj = {
    name: "Shashank",
    age: 22,
}

//FUNCTIONS//
const myFunction = function(){
    //console.log("Hello world");
}

console.log(typeof anotherId);

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/


/*********************************************************** */

// stack (Primitive)    Heap(Non Primitive)

let myname = "Shashank"

let anotherName = myname

anotherName="Arsh" //because copy is created doesn't affect myname
// console.log(myname);
// console.log(anotherName);

let userOne={
    email: "user@google.com"
}

let userTwo=userOne

userTwo.email = "falana@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);