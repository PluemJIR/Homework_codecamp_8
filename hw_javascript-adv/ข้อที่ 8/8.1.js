let str = prompt("Str ?");
function ucFirst(str) {
    let l = str.length
    let rest = str.slice(1,l)
    return str[0].toUpperCase()+rest;
}  
console.log( ucFirst(str)  ); 