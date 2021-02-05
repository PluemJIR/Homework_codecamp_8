function draw(n) {
    let row = 0;
    let count = 1;
        while (row < n) {
            let col = 1;
            result = ""
            while (col <= n+(n-1)) {
                if (col == n+row || col == n-row || col == n) {
                    result = result + String(count)
                    count += 1
                }
                else if (col < n+row && col > n || col > n-row && col < n) {
                    result = result + String(count)
                    count += 1
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
        row -= 2
        while (row >= 0) {
            let col = n+(n-1);
            result = ""
            while (col > 0) {
                if (col == n+row || col == n-row || col == n) {
                    result = result + String(count)
                    count += 1
                }
                else if (col < n+row && col > n || col > n-row && col < n) {
                    result = result + String(count)
                    count += 1
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
