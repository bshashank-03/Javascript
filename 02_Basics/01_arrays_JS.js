// Array in JS

/* 1- JavaScript arrays are resizable and can contain a mix of different data types.
   2- JavaScript array-copy operations create shallow copies.*/

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() // Remove the last element

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr); //Bind the array and convert to string


// slice, splice

console.log("A ", myArr); // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)

console.log(myn1); // [ 1, 2 ]
console.log("B ", myArr); // B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); // [ 0, 4, 5 ] {Manupulate the original array also}
console.log(myn2); // [ 1, 2, 3 ]