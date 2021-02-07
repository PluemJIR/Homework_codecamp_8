// array1 = [1, "1", 2, {}] 
// array2 [1, 2] // filter Number

let array1 = [1, "1", 2, {}] 
let array2 = array1.filter(item => typeof(item) === "number");
alert(array2);