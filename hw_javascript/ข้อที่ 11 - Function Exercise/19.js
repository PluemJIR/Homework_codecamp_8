function draw(n) {
    let row = 0
    while (row < n){
        let round = n-1
        result = ""
        while (round>=0){
            if (round>row){
                result = result + "_"
            }
            else {
                result = result + "*"
            }
            round -= 1
            //console.log(result+"1")
        }
        row += 1
        console.log(result)
    }
    //console.log("done1")
    row -=2
    while (row >= 0){
        let round = n-1
        result = ""
        while (round>=0){
            if (round>row){
                result = result + "_"
            }
            else {
                result = result + "*"
            }
            round -= 1
            //console.log(result+"1")
        }
        row -= 1
        console.log(result)
    }
}