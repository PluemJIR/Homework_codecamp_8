function sumInput() {
    let set = []
    let result = 0
    while (true) {
        let value = +prompt("Value?")
        if (Boolean(value) === false){
            break
        }
        set.push(value)
        // console.log(set)
    }
    for (let i of set) {
        result = result + i
    }
    console.log(result)
}