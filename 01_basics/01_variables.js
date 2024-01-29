const accountId = 144553
let accountEmail = "nitin99@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2

accountEmail = "nk99@google.com"
accountPassword = "12345678"
accountCity = "Gaya"

console.log(accountId);
/* 
Prefer not to use var,because of issue in block scope & functional scope
*/
console.table([accountId,accountEmail,accountPaswword,accountCity,accountState]);