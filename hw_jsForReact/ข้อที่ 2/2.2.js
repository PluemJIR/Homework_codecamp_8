// let head = {
//     glasses: 1
//   };

//   let table = {
//     pen: 3
//   };

//   let bed = {
//     sheet: 1,
//     pillow: 2
//   };

//   let pockets = {
//     money: 2000
//   };

let pockets = {
    money: 2000
  };

let bed = {
__proto__:pockets,
sheet: 1,
pillow: 2
};

let table = {
    __proto__:bed,
    pen: 3
  };

let head = {
    __proto__:table,
    glasses: 1
  };
  
  
