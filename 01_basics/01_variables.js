const accountId = 12345
let accountName = "Samiksha"
var accountPassword = "Pune"
accountCity = "Goa"

/*  var is not used because of issue in block scope and functional scope
    let is mostly used to declare e variables*/

console.log(accountId);
console.log(accountName);
console.log(accountPassword);
console.log(accountCity);

/* Const can not be changes */
accountName = "Sam"
accountPassword = "goa"
accountCity = "Pune"

/*Table is used to display atta the values in table format*/
console.table([accountId, accountName, accountPassword, accountCity]);