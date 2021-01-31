let user = {
    name: "John",
    go: function() { alert(this.name) }
  }
  
  (user.go)()
  
//  ต้องเติม ; ต่อจาก {} ของตัว object  