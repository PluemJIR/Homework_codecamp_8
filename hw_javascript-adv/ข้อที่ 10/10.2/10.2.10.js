// array1 = ["APPLE", "appLE", "PEACH", "PEach"]
// array2 = ["APPLE", "PEACH"] // filter คำที่เป็นอักษรใหญ่ทุกตัว

let array1 = ["APPLE", "appLE", "PEACH", "PEach"]
let array2 = array1.filter(item => item === item.toUpperCase());
alert(array2);
console.log(array2)