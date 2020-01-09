function goToQLSP() {
    window.location.href = ("QLSP.html");
}

// function goToInHoaDon() {
//     window.location.href = ("inHoaDon.html");

// }

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

function getDefaulCustomer() {
    return {
        'tenKhachHang': '',
        'diaChi': '',
        'soDienThoai': '',
        'hangHoa': '',
    }
}

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
    <td> <input type = 'number' id = 'number' onchange = "changeAmount" class="form-control form-control-sm"  value="${shoe.soLuongmua}">  </td>
    <td id = "thanhtien">${shoe.giaBan * shoe.soLuongmua} </td>
    </tr>
    `;
            s += ds;
        }
    }
    newDs.innerHTML = s;
}

function changeAmount() {
    document.getElementById("thanhtien").innerHTML = (document.getElementById("thanhtien").innerHTML * document.getElementById("number").value)
}
let newCustomer = [];

function openProfile() {
    $('#khach-hang').modal('show');
}

function checkOnProduct(maSanPham) {
    for (let i = 0; i < listShoes.length; i++) {
        const element = listShoes[i];
        var checking = document.getElementById(`${element.maSanPham}`);
        if (maSanPham === element.maSanPham) {
            if (checking.checked == true) {
                newList[i + 100] = element;
            }
            if (checking.checked == false) {
                newList.splice(i + 100, 1)
                i++;
            };
        }
        display(newList);
    }
}

function inHoaDon() {
    let nameCustomer = document.getElementById('addname').value;
    document.getElementById('nameCustomer').innerHTML = nameCustomer;
}