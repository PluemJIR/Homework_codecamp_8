function truncate(str, maxlength) {
    let result = ""
    if (str.length > maxlength) {
        let x = str.slice(0,maxlength-1)
        result = x + "..."
        console.log(result)
    }
    else {
        result = str
        console.log(result)
    }
}
