const score = 100
// console.log(score);//100

const another = new Number(400)
// console.log(another); //[Number: 400]

// console.log(another.toString().length);
// console.log(another.toFixed(1));//400.0

const anotherNumber = 123.8978
// console.log(anotherNumber.toPrecision(2));


/*+++++++++++++++++++++++++++++++++++++++++++++++++*/

// let num = 5.123456;

// console.log(num.toPrecision()); // '5.123456'
// console.log(num.toPrecision(5)); // '5.1235'
// console.log(num.toPrecision(2)); // '5.1'
// console.log(num.toPrecision(1)); // '5'

// num = 0.000123;

// console.log(num.toPrecision()); // '0.000123'
// console.log(num.toPrecision(5)); // '0.00012300'
// console.log(num.toPrecision(2)); // '0.00012'
// console.log(num.toPrecision(1)); // '0.0001'

// // note that exponential notation might be returned in some circumstances
// console.log((1234.5).toPrecision(2)); // '1.2e+3'

/*+++++++++++++++++++++++++++++++++++++++++++++++++*/

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));//10,00,000

// ++++++++++++++++ MATHS ++++++++++++++++++++ //

// console.log(Math.abs(-5));//5
// console.log(Math.round(5.5));//6
// console.log(Math.ceil(6.8));//7
// console.log(Math.floor(6.8));//6
// console.log(Math.min(6,8,5,9));//5
// console.log(Math.max(6,8,5,9));//9

// console.log(Math.random());
// bydefault gives values in range {0,1}
// console.log(Math.floor(Math.random()*10)+1);
// *10 shift decimal by 1 digit but floor can convert 0.1 to 0, so to resolve this we add +1 Now range {1,9}

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1) )+ min);
// now range {10,20}
