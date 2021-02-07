let str = prompt("String?");
let maxlength = +prompt("Maximum length")
let result = ""
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        let x = str.slice(0,maxlength)
        result = x + "..."
        console.log(result)
    }
    else {
        result = str
        console.log(result)
    }
}
console.log(truncate(str, maxlength))