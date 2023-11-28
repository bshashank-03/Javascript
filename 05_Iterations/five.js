const nums = [1,2,3,4,5,6,7,8,9]

// const newNums = nums.map( (item) => item + 10)
// console.log(newNums);

            /* Chaining */

const myNums = nums.map( (item)=> item*10)
                   .map( (item)=> item+1)
                   .filter( (item)=> item >40)
console.log(myNums);