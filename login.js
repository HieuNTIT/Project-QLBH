function submit() {
  let username = "admin";
  let password = 1234;
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  if (user === "") {
    alert("Bạn chưa nhập Username");
    return false;
  }

  if (pass === "") {
    alert("Bạn chưa nhập Password");
    return false;
  }
  if (username == user && password == pass) {
    window.location.href = "QLSP.html";
  } else {
    alert("sai Username hoặc Password");
  }
  return true
}