function draw(n) {
    let row = 0
    while (row < n){
        let round = 0
        result = ""
        while (round<n){
            if (round<=row){
                result = result + "*"
            }
            else {
                result = result + "_"
            }
            round += 1
            //console.log(result+"1")
        }
        row += 1
        console.log(result)
    }
    row -=1
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
