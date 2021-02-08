let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) );

function aclean(arr) {
    let map = new Map();
    for (let x of arr) {
        let alpha = x.toLowerCase().split("").sort().join("")
        map.set(alpha, x);
    }
    return Array.from(map.values());
}