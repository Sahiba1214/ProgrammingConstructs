// Day and Month
var readline = require("readline-sync");
console.log("Select a date between March 20 and June 20");
let date = readline.question("Enter date in numbers : ");
let month = readline.question("Enter month in words : ");
if (month == "march" && date >= 20 && date < 31) console.log("True");
else if(month =="april" && date < 30) console.log("True");
else if(month =="may" && date < 31) console.log("True");
else if(month =="june" && date < 20) console.log("True");
else
    console.log("False");