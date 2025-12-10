const accountId = 144553
let accountEmail = "vaishu@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "vl@vl.com"
accountPassword = "21212121"
accountCity = "Mumbai"

console.log(accountId);

/*
prefer not to use var because of issue in bloack scope and functional scop */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])