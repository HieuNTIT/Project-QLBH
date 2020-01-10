function goToQLSP() {
    window.location.href = ("QLSP.html");
}

function save() {
    window.location.href = ("lapHoaDon.html");
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

function displaySP() {
    let content = ``;
    for (let i = 0; i < listShoes.length; i++) {
        const element = listShoes[i];
        content += `
        <li class="col-12 col-md-6 col-lg-3">
        <div >
          <figure><img id='img-${element.maSanPham}' src=${element.imgUrl} class="img-responsive" onclick = "check('${element.maSanPham}');checkOnProduct('${element.maSanPham}')" alt=""></figure>
          <form>
            <input type="checkbox"  onchange = "checkOnProduct('${element.maSanPham}')" id='${element.maSanPham}'> ${element.tenSanPham}
          </form>
        </div>
        </li>
        `
        document.getElementById('listShoes').innerHTML = content;
    }
}
displaySP();

function check(maSP) {
    // console.log(MaSP)
    document.getElementById(`${maSP}`).checked = true;
    document.getElementById(`img-${maSP}`).removeAttribute("onclick");
    document.getElementById(`img-${maSP}`).setAttribute("onclick",`unCheck('${maSP}');checkOnProduct('${maSP}')`)
    // displaySP();
}

function unCheck(maSP) {
    document.getElementById(`${maSP}`).checked = false;
    document.getElementById(`img-${maSP}`).removeAttribute("onclick");
    document.getElementById(`img-${maSP}`).setAttribute("onclick",`check('${maSP}');checkOnProduct('${maSP}')`)

    // displaySP();
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
    <td> <input type = 'number' id = 'soluong' class="form-control form-control-sm" value="1">  </td>
    <td>${Number(shoe.giaBan * document.getElementById('soluong').value)} </td>
    </tr>
    `;
            s += ds;
        }
    }
    newDs.innerHTML = s;
}
let newCustomer = [];

function openProfile() {
    $('#khach-hang').modal('show');
    let profile = getDefaulCustomer();
    profile.tenKhachHang = document.getElementById('addname');
    profile.soDienThoai = document.getElementById('phone-number');
    profile.diaChi = document.getElementById('address');
    newCustomer.push(profile);
}
localStorage.setItem('customer', JSON.stringify(newCustomer));

let listSP = [];
function checkOnProduct(maSanPham) {
    for (let i = 0; i < listShoes.length; i++) {
        const element = listShoes[i];
        var checking = document.getElementById(`${element.maSanPham}`);
        if (maSanPham === element.maSanPham) {
            if (checking.checked == true) {
                listSP.push(element);   
                displayPickedTbody(listSP);
            }
            if (checking.checked == false) {
                for (let j = 0; j < listSP.length; j++) {
                    const sp = listSP[j];
                    if (sp.maSanPham === maSanPham) {
                        listSP.splice(j,1)
                    }
                }
                displayPickedTbody(listSP);
            };
        }
        // display(newList);
    }
    // for (let i = 0; i < listShoes.length; i++) {
    //     const element = listShoes[i];
    //     if (maSanPham === element.maSanPham) {
    //         listSP.push()
    //     }
        
    // }
    
}

function displayPickedTbody(listSP) {
    let content = ``;
    for (let i = 0; i < listSP.length; i++) {
        const element = listSP[i];
        content += `
        <tr>
            <td>${element.tenSanPham}</td>
            <td>${element.soLuong}</td>
            <td>${element.giaBan}</td>
        </tr>
        `
    }
    document.getElementById("Picked").innerHTML = content;
}