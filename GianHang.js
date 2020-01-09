function goToQLSP() {
    window.location.href = ("QLSP.html");
}

function goToNhapHang() {
    window.location.href = ("GianHang.html");
}

//PARSEJSON-->
let listShoes = JSON.parse(localStorage.getItem("Allshoes"));

function getDefaultShoes() {
    return {
        'imgUrl': '',
        'maSanPham': '',
        'tenSanPham': '',
        'tenThuongHieu': '',
        'size': 0,
        'soLuong': 0,
        'giaBan': 0,
        'giaMua': 0,
    };
};

let content = ``;
for (let i = 0; i < listShoes.length; i++) {
    const element = listShoes[i];
    content += `
    <li class="col-12 col-md-6 col-lg-3">
    <div >
      <figure><img src=${element.imgUrl} class="img-responsive" alt=""></figure>
      <form>
        <input type="checkbox"  onchange = "checkOnProduct('${element.maSanPham}')" id=${element.maSanPham}> ${element.tenSanPham}
      </form>
    </div>
    </li>
    `
    document.getElementById('listShoes').innerHTML = content;
}
var newList = [];

function display(list) {
    let s = '';
    let newDs = document.getElementById("Picked");
    for (let i = 0; i < list.length; i++) {
        const shoe = list[i];
        if (shoe != null) {
            let ds = `
    <tr>
    <td>${shoe.tenSanPham} </td>
    <td> 1 </td>
    <td>${shoe.giaBan}</td>
    </tr>
    `;
            s += ds;
        }
    }
    newDs.innerHTML = s;
}


function checkOnProduct(maSanPham) {
    let k = 0;
    for (let i = 0; i < listShoes.length; i++) {
        const element = listShoes[i];
        var checking = document.getElementById(`${element.maSanPham}`);
        if (maSanPham === element.maSanPham) {
            if (checking.checked == true) {
                newList.push(element);
            } else newList.splice(`${element}`, 1);
        }
        display(newList);
    }
}