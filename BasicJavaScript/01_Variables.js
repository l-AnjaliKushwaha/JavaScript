const accountId = 14454
let accountEmail = "anjali123@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 1223 // not allowed
console.log(accountId)

accountEmail = "anju23@gmail.com"
accountPassword = "6665"
accountCity = "Bhopal"

/*
Prefer not to use var
because of issue in scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])