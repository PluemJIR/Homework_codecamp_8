function draw(n) {
    for (i=1;i<=n;i++){
        //console.log(i);
        let result = ""
        for (j=1;j<=n;j++){
            //let result = ""
            result = result + String(i*j);
        }
        console.log(result);
    }
}
