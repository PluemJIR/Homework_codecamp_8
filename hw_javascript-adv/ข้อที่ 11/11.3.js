// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// // Error: keys.push is not a function
// keys.push("more");

// keys ในโจทย์เป็น object ใช้pushไม่ได้ เปลี่ยน keys ให้เป็น array ก่อน แล้วใช้ค่อยใช้ push 



let map = new Map();

map.set("name", "John");

let keys = []
for (let item of map.keys()) {
    keys.push(item) 
}
console.log(keys)
  

keys.push("more");
console.log(keys)
