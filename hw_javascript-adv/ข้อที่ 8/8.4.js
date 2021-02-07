let string = +prompt("$");
let rate = +prompt("Rate?")
function extractCurrencyValue(string, rate){
    return string*rate
}
console.log(extractCurrencyValue(string, rate))