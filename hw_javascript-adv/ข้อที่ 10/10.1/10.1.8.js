// array1 = [1,3,4,5,6,7,8]
// array2 ["odd", "odd", "even", "odd", "even", "odd", "even"]

let array1 = [1,3,4,5,6,7,8]
let array2 = array1.map( function(item) {
    if (item%2 == 0) {
        return "even"
    } 
    else {
        return "odd"
    }
});
alert(array2);