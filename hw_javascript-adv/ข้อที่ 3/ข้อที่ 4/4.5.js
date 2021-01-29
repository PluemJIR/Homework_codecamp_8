// ของอาจารย์ซันเต๋อ
function multiplyNumeric(obj, times) {
    for(let key in obj){
        if (typeof obj[key] !== "number") continue;
        obj[key] *= times
    }
}

// ลองเขียนก่อนดูเฉลย
function multiplyNumeric(obj, times) {
    for(let key in obj){
        if (typeof obj[key] !== "string") {
            obj[key] *= times    
        }
        else if (typeof obj[key] === "string") {
            obj[key] = obj[key]
            console.log(obj[key])
        }
        
    }
}

let menu = {
    width: 200,
    height : 300,
    title : "my menu"
}