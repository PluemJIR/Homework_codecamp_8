// array1 = [1, 2, 3, 4]
// array2 [1, 3] // filter เลขคี่

let array1 = [1, 2, 3, 4]
let array2 = array1.filter(item => item%2 != 0);
alert(array2);