// array1 = [1, "1", 2, {}] 
// array2 ["number", "string", "number", "object"]

let array1 = [1, "1", 2, {}]
let array2 = array1.map(item => typeof(item));
alert(array2);
