let str = prompt("Str ?");
function checkSpam(str) {
    if (str.includes("xxx") || str.includes("viagra") ) {
        return true
    }  else {
        return false ;
    }
}
console.log(checkSpam(str))