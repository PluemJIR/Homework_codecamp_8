let style = ["Jazz","Blues"]; //สร้าง array ชื่อ styles ที่มี items ชื่อ “Jazz” และ “Blues”
console.log(style)

style.push("Rock-n-Roll"); //เพิ่ม “Rock-n-Roll” ต่อท้าย
console.log(style)

style[1]= "Classic"; //นำค่า Classics ไปทับค่าตรงกลางของ Array
console.log(style)

style.shift() ; //นำ items ตัวแรกออกมาและลบ items ตัวนั้นออกจาก array
console.log(style)

style.unshift("Rap","Reggae"); //เพิ่ม “Rap” และ “Reggae” ไปข้างหน้าของ Array
console.log(style)
