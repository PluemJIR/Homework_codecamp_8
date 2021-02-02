
let min = +prompt("Min ?");
let max = +prompt("Max ?");
function random(min,max) {
    return Math.random() * (max - min + 1);
}  
console.log( random(min,max) ); 

// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525
