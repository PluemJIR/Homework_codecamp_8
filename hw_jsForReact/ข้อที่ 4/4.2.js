Function.prototype.defer = function(ms){
    let f = this;
    return function(a,b) {
        setTimeout(()=>f(a,b),ms)
    }
}
 
function f() {
    alert("Hello!");
}

function f(a,b){
    alert(a+b)
}
  
f.defer(1000)(1,2) // แสดง "Hello!" หลังจากผ่านไป 1 วินาที