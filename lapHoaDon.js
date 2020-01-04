



let checkExits = localStorage.getItem('dsKhachHang');
  
dataKhachHang = JSON.parse(checkExits);

console.log(dataKhachHang);



function inHoaDon() {
    window.location.href ="inHoaDon.html" ;
}

