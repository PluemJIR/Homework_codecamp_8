function makeUser() {
    return {
      name: "John",
      ref: this
    };
  };
  
  let user = makeUser();
  
  alert( user.ref.name ); // What's the result?

  //เด้งหน้าจอ alert แต่ไม่มีข้อความ ตัว ref เป็น undefine ---> อาจารย์บอกมี ref เป็น window