function getMaxSubSum(arr) {
    let l = arr.length
    let max = 0
    let i = 0
    while (i<l) {
        let smax = 0
        let j = i
        while (j<l) {
            smax += arr[j]
            if (smax > max) {
                max = smax
            }
            j += 1
        }
        i += 1
    }
    let takeall = 0
    for (let x of arr) {
        takeall += x
    }
    if (max == takeall ) {
        console.log("take all")
    }
    else {
       console.log(max) 
    }
    
}