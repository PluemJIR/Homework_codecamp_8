// array1 = [1, -3, 2, 8, -4, 5]
// array2 [1, 3, 2, 8, 4, 5]

let array1 = [1, -3, 2, 8, -4, 5]
let array2 = array1.map( function(item) {
    if (item > 0) {
        return item
    } 
    else {
        return item*-1
    }
});
alert(array2);