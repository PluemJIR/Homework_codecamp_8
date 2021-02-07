// array1 = [
//     { name: "apple", surname: "London" },
//     { name: "banana", surname: "Bangkok" },
//     { name: "watermelon", surname: "Singapore" },
//   ]
//   array2 ["apple London", "banana Bangkok", "watermelon Singapore"]


let array1 = [
    { name: "apple", surname: "London" },
    { name: "banana", surname: "Bangkok" },
    { name: "watermelon", surname: "Singapore" },
  ]
let array2 = array1.map(item => item.name + " " + item.surname);
alert(array2);