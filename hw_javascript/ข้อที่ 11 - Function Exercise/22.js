function draw(n) {
    let row = n-1;
        while (row >= 0) {
            let col = n+(n-1);
            result = ""
            while (col > 0) {
                if (col == n+row || col == n-row || col == n) {
                    result = result + "*"
                }
                else if (col < n+row && col > n || col > n-row && col < n) {
                    result = result + "*"
                }
                else  {
                    result = result + "-"
                }
                col -= 1
                //  console.log(result + "xx")
            }
            console.log(result)
            row -= 1 
            // console.log(row)
        }
    }
