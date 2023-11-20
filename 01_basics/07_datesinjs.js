// Dates
/*JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

 */

let mydate = new Date()
// console.log(mydate); //2023-11-20T06:57:40.465Z
// console.log(mydate.toString()); //Mon Nov 20 2023 06:59:18 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toLocaleDateString()); // 11/20/2023
// console.log(mydate.toDateString());// Mon Nov 20 2023
// console.log(mydate.toISOString());// 2023-11-20T06:59:18.340Z

// console.log(typeof mydate);// object
// let mycreatedDate = new Date(2023, 0, 3)
 let mycreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(mycreatedDate.toLocaleString());//Tue Jan 03 2023

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})