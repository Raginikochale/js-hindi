const accountId = 144553
let accountEmail = "ragini23@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 //not allowed

accountEmail = "rk@rk.com"
var accountPassword = "57273200"
accountCity = "Indore"

console.log(accountId)

/*
prefer not to use var
becouse of issue in block and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])