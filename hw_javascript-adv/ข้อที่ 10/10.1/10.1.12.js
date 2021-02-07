// array1 = [
//     { name: "apple", birth: "2000-01-01" },
//     { name: "banana", birth: "1990-10-10" },
//     { name: "watermelon", birth: "1985-12-30" },
//   ]
//  array2 [
//       "<tr>
//          <td>apple</td> 
//          <td>01 jan 2000</td>
//        </tr>",
//       "<tr> 
        //     <td>banana</td> 
        //     <td>10 oct 1990</td> 
        // </tr>",
//       "<tr> <td>watermelon</td> <td>30 dec 1985</td> </tr>",
//   ]

let array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
  ]
let array2 = array1.map( function(item) {
    let month = Number(item.birth.slice(5,7))
    let year = item.birth.slice(0,4)
    let day = item.birth.slice(8,10)
    console.log(year)
    console.log(month)
    if (month == 1) {
        month = "jan"
    }
    else if (month == 10) {
        month = "oct"
    }
    else if (month == 12) {
        month = "dec"
    }
    console.log(month)
    return (`<tr>
            <td> ${array1.name}</td> 
            <td>${day}  ${month}  ${year}</td>
            </tr>`)

});
alert(array2);