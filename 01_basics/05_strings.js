const name = "shashank"
const repoCount = 50

console.log(name + repoCount + " Value");

// Modern way of writing syntax called (string interpolation)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Shashank-sb-com')
/* const strObj = new String(strPrim); // String with new returns a string wrapper object.
console.log(typeof strObj); // "object" */

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); //Remove spaces

//usually web url automatically replace spce with %20
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'));
console.log(gameName.split('-'));//split when see seperator '-' and stores in an array