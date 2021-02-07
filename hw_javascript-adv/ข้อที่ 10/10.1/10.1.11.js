// array1 = [
//     { name: "apple", birth: "2000-01-01" },
//     { name: "banana", birth: "1990-10-01" },
//     { name: "watermelon", birth: "1985-12-01" },
//   ]
//   array2 [
//     { name: "apple", birth: "2000-01-01", age: 19 },
//     { name: "banana", birth: "1990-10-01", age: 29 },
//     { name: "watermelon", birth: "1985-12-01", age: 33 },
//   ] 

let array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-01" },
    { name: "watermelon", birth: "1985-12-01" },
]
let array2 = array1.map( function(item) {
    let bd = item.birth.slice(0,4)
    let a = 2019 - Number(bd)
    let ag = {age : a};
    // console.log(ag)
    return Object.assign(item,ag);
});
alert(array2);
console.log(array2)