function draw(n) {
    let r = n*n;
    let i = r;
    while (i>0) {
        let count = "";
        for (j=0;j<n;j++){
            count = count + String(i);
            i -= 1
        }
        console.log(count)
    }
}

