// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// Avoid these below comparison it will create inconsistency in code 
// sometimes it treat null as '0' sometimes as NAN
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// Comparison convert NULL to a number, treating it as 0.
// That's why null >= 0 is true and null > 0 is false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);