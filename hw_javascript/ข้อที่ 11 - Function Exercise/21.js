function draw(n) {
    let row = 0;
        while (row < n) {
            let col = 1;
            result = ""
            while (col <= n+(n-1)) {
                if (col == n+row || col == n-row || col == n) {
                    result = result + "*"
                }
                else if (col < n+row && col > n || col > n-row && col < n) {
                    result = result + "*"
                }
                else  {
                    result = result + "-"
                }
                col += 1
                //  console.log(result + "xx")
            }
            console.log(result)
            row += 1 
            // console.log(row)
        }
    }
