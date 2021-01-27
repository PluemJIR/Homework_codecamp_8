function draw(n) {
    let r = n*n;
    let i = 0;
    while (i<r) {
        let count = "";
        for (j=0;j<n;j++){
            i = i+1
            count = count + String(i);
            
        }
        console.log(count)
    }
}

