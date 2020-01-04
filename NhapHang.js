function goToQLSP(){
    window.location.href = ("QLSP.html");
}
function goToNhapHang(){
window.location.href = ("NhapHang.html");
}
//PARSEJSON-->
let listShoes = JSON.parse(localStorage.getItem("Allshoes"));

let content = ``;
for (let i = 0; i < listShoes.length; i++) {
    const element = listShoes[i];
    content += `
    <li class="col-12 col-md-6 col-lg-3">
    <div>
      <figure><img src=${element.imgUrl} class="img-responsive" alt=""></figure>
      <h6 id="nameSP">${element.tenSanPham}</h6>
      <h6 id="masp">MSP:${element.maSanPham}</h6>
    </div>
    </li>
    `
    document.getElementById('listShoes').innerHTML = content;
}
function clickOnProduct(maSanPham){

}