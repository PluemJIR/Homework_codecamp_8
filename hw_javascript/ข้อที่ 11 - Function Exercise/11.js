function draw(n) {
let row = 1;
//let col = 0;
    while (row<=n){
        let result = ""
        let col = 1;
        while (col<=n){
            if (row==col){
                result = result + "_";
            }
            else {
                result = result + "*"
            }
            col++
            //console.log(result+"1")
        }        
        console.log(result)
        row += 1
    }
}
