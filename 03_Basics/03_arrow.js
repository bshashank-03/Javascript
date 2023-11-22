const user = {
    name: "Shashank",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.name}, welcome to website`);
        // console.log(this); // Hold current context value
    }
}

// user.welcomeMessage()
// user.name = "Bhushan"
// user.welcomeMessage()

// console.log(this);// {}

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // undefined
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

// chai()

/* Basic arrow Function */

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

/*
Note- Use of this keyword: Unlike regular functions, arrow functions do not have their own this.

let user = {
        name: "GFG",
        gfg1:() => {
            console.log("hello " + this.name); // no 'this' binding here
        },
        gfg2(){    
            console.log("Welcome to " + this.name); // 'this' binding works here
        }
    };
    user.gfg1();
    user.gfg2();
*/

/* Implicit Arrow Function */

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})// Object ko aise return krte hain


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
