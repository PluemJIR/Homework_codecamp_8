function draw(n) {
    let row = n;
    //let col = 0;
        while (row>0){
            let result = ""
            let col = n;
            while (col>0){
                if (row==col){
                    result ="_" + result;
                }
                else {
                    result = "*" + result
                }
                col -= 1
                //console.log(result+"1")
            }        
            console.log(result)
            row -= 1
        }
    }
    