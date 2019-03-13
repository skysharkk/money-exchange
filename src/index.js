// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
let countHalf = 0;
let countQuarte = 0;
let countDime = 0;
let countNickel = 0;
let countPenny = 0;

let coins = {
  "H" : 50,
  "Q" : 25,
  "D" : 10,
  "N" : 5,
  "P" : 1,
};

let result = {};
if (currency > 10000) {
    result.error = "You are rich, my friend! We don't have so much coins for exchange";
    return result;
}
while(currency > 0) {
    if(currency >= coins["H"]) {
    countHalf++;
    currency -= coins["H"]; 
    result["H"] = countHalf;
    } else if(currency >= coins["Q"]) {
    countQuarte++;
    currency -= coins["Q"]; 
    result["Q"] = countQuarte;
    } else if(currency >= coins["D"]) {
    countDime++;
    currency -= coins["D"]; 
    result["D"] = countDime;
    } else if(currency >= coins["N"]) {
    countNickel++;
    currency -= coins["N"]; 
    result["N"] = countNickel;
    } else if(currency >= coins["P"]) {
    countPenny++;
    currency -= coins["P"]; 
    result["P"] = countPenny;
    } 
}
    return result;
}
