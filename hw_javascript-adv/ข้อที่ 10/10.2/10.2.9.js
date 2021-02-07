// array1 = ["peach", 1, -3, "2", {}, []]
// array2 ["peach", "2"] // filter string

let array1 = ["peach", 1, -3, "2", {}, []]
let array2 = array1.filter(item => typeof(item) === "string");
alert(array2);
console.log(array2)