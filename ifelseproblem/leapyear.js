// Leap Year
var readline = require("readline-sync");
let year = readline.question("Enter a year : ");
if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 100))
  console.log(year + " is a leap year");
else console.log(year + " is not a leap year");
