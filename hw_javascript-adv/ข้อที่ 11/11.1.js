function unique(arr) {
    /* your code */
    let set = new Set()
    for (let x of arr) {
        set.add(x)
    }
    // console.log(set)
    for (let uni of set) {
        alert(uni);
    }
    
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ];
  
  alert( unique(values) ); // Hare, Krishna, :-O