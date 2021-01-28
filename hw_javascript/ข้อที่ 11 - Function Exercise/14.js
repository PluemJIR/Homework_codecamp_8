function draw(n) {
    let row = n
    while (row > 0){
        let round = n
        result = ""
        while (round>0){
            if (round>row){
                result = "_" + result
            }
            else {
                result = "*" + result
            }
            round -= 1
            //console.log(result+"1")
        }
        row -= 1
        console.log(result)
    }
}