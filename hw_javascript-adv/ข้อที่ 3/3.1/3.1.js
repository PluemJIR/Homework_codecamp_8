let key = prompt("Enter Key :");
let Object = {};
while (key !== "stop") {
    let value = prompt("Enter Value :");
    Object[key] = value;
    key = prompt("Enter Key");
}
console.log(Object)