function extractCurrencyValue(string, rate){
    let amount = +string.slice(1,string.length)
    return amount*rate
}
