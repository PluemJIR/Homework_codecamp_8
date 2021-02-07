// array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]
// array2 ["pineapple", "watermeon"] // filter ตัวอักษร > 6

let array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]
let array2 = array1.filter(item => item.length > 6);
alert(array2);