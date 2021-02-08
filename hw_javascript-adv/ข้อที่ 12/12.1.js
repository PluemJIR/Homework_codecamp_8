let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  function sumSalaries(salaries) {
    let price = Object.values(salaries)
    let result = 0
    let i = 0
    while (i<price.length){
        result += price[i]
        i += 1
    }
    return result
    
}
  
alert( sumSalaries(salaries) ); // 650