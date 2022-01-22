// Flip Coin
var readline = require("readline-sync");
let coinToss = Math.random();
if(coinToss >= 0.5)
{
    console.log("Heads!!!");
}
else
{
    console.log("Tails!!!");
}
