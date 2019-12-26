function submit(){
    let username = "admin";
    let password = 1234;
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (user === ""){
        alert("Bạn chưa nhập Username");
        return false;
      }
     
      if (pass === ""){
        alert("Bạn chưa nhập Password");
        return false;
      }
      if (username==user && password==pass){
          alert("Đăng nhập thành công");
          window.location.href = "NhapHang.html";
      }else{
          alert("sai Username hoặc Password");
      }
      return true
}