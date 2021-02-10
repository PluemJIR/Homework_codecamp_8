let salaries = {
    "John" : 100,
    "Pete" : 300,
    "Mary" : 250
};

function topSalaries(salaries) {
    let mostSalaries = null;
    let max = 0
    for (name in salaries){
        if (salaries[name] > max){
            max = salaries[name]
            mostSalaries = name 
        }
    }
    return mostSalaries
}

