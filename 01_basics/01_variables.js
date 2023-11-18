const accountId = 144559
let accountEmail = "shashank.b2803@gmail.com"
var accountPassword = "12345"
accountCity = "MZN"

// accountId = 2 // Not allowed

accountEmail = "sonalbhushan11@gmail.com"
accountPassword = "12121"
let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])