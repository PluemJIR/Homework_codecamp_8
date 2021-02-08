let user = {
    name: 'John',
    age: 30
};

function count(user) {
    let x = Object.keys(user)
    return x.length
}

alert( count(user) ); // 2
  