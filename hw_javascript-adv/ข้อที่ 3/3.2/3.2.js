let key = prompt("Name of Fruits :");
let Object = {};
while (key !== "stop") {
    let value = +prompt("Value :");
        if (value > 1){
        key = key + "s"
    }
    Object[key] = value;
    key = prompt("Name of Fruits :");
    
}
console.log(Object)