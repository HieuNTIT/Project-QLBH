function goToQLSP() {
  window.location.href = ("QLSP.html");
}
function goToNhapHang() {
  window.location.href = ("GianHang.html");
}
function goToLapHD() {
  window.location.href = ("lapHoaDon.html");
}
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
let listShoes = [];
let shoes1 = getDefaultShoes();
shoes1.imgUrl = "image/Ultraboost.jpg";
shoes1.maSanPham = 'SP001';
shoes1.tenSanPham = 'Adidas Ultraboost';
shoes1.tenThuongHieu = 'Adidas';
shoes1.size = 40;
shoes1.soLuong = 10;
shoes1.giaBan = 3.95e6;
shoes1.giaMua = 3.9e6;
shoes1.soLuongmua = 1;
listShoes.push(shoes1);

let shoes2 = getDefaultShoes();
shoes2.imgUrl = 'image/Alphaboost.png';
shoes2.maSanPham = 'SP002';
shoes2.tenSanPham = 'Adidas Alphaboost';
shoes2.tenThuongHieu = 'Adidas';
shoes2.size = 41;
shoes2.soLuong = 15;
shoes2.giaBan = 3.95e6;
shoes2.giaMua = 3.9e6;
shoes2.soLuongmua = 1;
listShoes.push(shoes2);

let shoes3 = getDefaultShoes();
shoes3.imgUrl = 'image/epic.jfif';
shoes3.maSanPham = 'SP003';
shoes3.tenSanPham = 'Nike Epic React';
shoes3.tenThuongHieu = 'Nike';
shoes3.size = 42;
shoes3.soLuong = 10;
shoes3.giaBan = 2.6e6;
shoes3.giaMua = 2.5e6;
shoes3.soLuongmua = 1;

listShoes.push(shoes3);

let shoes4 = getDefaultShoes();
shoes4.imgUrl = 'image/nikeair.jpg';
shoes4.maSanPham = 'SP004';
shoes4.tenSanPham = 'Nike Air max';
shoes4.tenThuongHieu = 'Nike';
shoes4.size = 43;
shoes4.soLuong = 20;
shoes4.giaBan = 2.96e6;
shoes4.giaMua = 2.9e6;
shoes4.soLuongmua = 1;

listShoes.push(shoes4);

let shoes5 = getDefaultShoes();
shoes5.imgUrl = 'image/nikeair.jpg';
shoes5.maSanPham = 'SP005';
shoes5.tenSanPham = 'Nike Air max';
shoes5.tenThuongHieu = 'Nike';
shoes5.size = 43;
shoes5.soLuong = 20;
shoes5.giaBan = 2.96e6;
shoes5.giaMua = 2.9e6;
shoes5.soLuongmua = 1;

listShoes.push(shoes5);

let shoes6 = getDefaultShoes();
shoes6.imgUrl = 'image/epic.jfif';
shoes6.maSanPham = 'SP006';
shoes6.tenSanPham = 'Nike Epic React';
shoes6.tenThuongHieu = 'Nike';
shoes6.size = 42;
shoes6.soLuong = 10;
shoes6.giaBan = 2.6e6;
shoes6.giaMua = 2.5e6;
shoes6.soLuongmua = 1;

listShoes.push(shoes6);

let shoes7 = getDefaultShoes();
shoes7.imgUrl = 'image/Alphaboost.png';
shoes7.maSanPham = 'SP007';
shoes7.tenSanPham = 'Adidas Alphaboost';
shoes7.tenThuongHieu = 'Adidas';
shoes7.size = 41;
shoes7.soLuong = 15;
shoes7.giaBan = 3.95e6;
shoes7.giaMua = 3.9e6;
shoes7.soLuongmua = 1;
listShoes.push(shoes7);

let shoes8 = getDefaultShoes();
shoes8.imgUrl = "image/Ultraboost.jpg";
shoes8.maSanPham = 'SP008';
shoes8.tenSanPham = 'Adidas Ultraboost';
shoes8.tenThuongHieu = 'Adidas';
shoes8.size = 40;
shoes8.soLuong = 10;
shoes8.giaBan = 3.95e6;
shoes8.giaMua = 3.9e6;
shoes8.soLuongmua = 1;
listShoes.push(shoes8);
//LocalStorage

let checkExits = localStorage.getItem('Allshoes');
if (checkExits === null) {
  localStorage.setItem('Allshoes', JSON.stringify(listShoes));
} else {
  listShoes = JSON.parse(checkExits);
}

function displayListShoes(list) {
    let body = document.getElementById('list-shoes');
    let s = '';
    for (let i = 0; i < list.length; i++) {
        const shoes = list[i];
        let tr = `
        <tr>
          <td>${i + 1}</td>
          <td>${shoes.maSanPham}</td>
          <td>${shoes.tenSanPham}</td>
          <td>${shoes.tenThuongHieu}</td>
          <td>${shoes.size}</td>
          <td>${shoes.soLuong} Đôi</td>
          <td>${shoes.giaBan}</td>
          <td>${shoes.giaMua}</td>
          <td>
            <button class="btn btn-success" onclick="EditShoes('${shoes.maSanPham}')">Sửa</button>
            <button class="btn btn-warning" onclick="deleteClother('${shoes.maSanPham}')">Xóa</button>
          </td>
        </tr>`;
        s += tr;
    }
    body.innerHTML = s;
}
displayListShoes(listShoes);

//===============Edit=================//
function addShoes(e) {
    e.preventDefault();

  let maSanPham = document.getElementById('txtMSP').value;
  let tenSanPham = document.getElementById('txtTSP').value;
  let tenThuongHieu = document.getElementById('txtTHieu').value;
  let size = Number(document.getElementById('txtSize').value);
  let soLuong = Number(document.getElementById('txtSL').value);
  let giaBan = Number(document.getElementById('txtGiaBan').value);
  let giaMua = Number(document.getElementById('txtGiaMua').value);
  let imgUrl = document.getElementById('fileToUpload').value;
  if (size <= 30) {
    alert("Mời nhập size")
  }
  else if (soLuong <= 0) {
    alert("Bạn chưa nhập số lượng");
  }
  else {
    let newShoes = getDefaultShoes();
    newShoes.maSanPham = maSanPham;
    newShoes.tenSanPham = tenSanPham;
    newShoes.tenThuongHieu = tenThuongHieu;
    newShoes.size = Number(size);
    newShoes.soLuong = Number(soLuong);
    newShoes.giaBan = Number(giaBan);
    newShoes.giaMua = Number(giaMua);
    newShoes.imgUrl = imgUrl;

        listShoes.push(newShoes);
        displayListShoes(listShoes);
        document.getElementById('frmnewShoes').reset();
        $('#add-shoes').modal('hide');
        localStorage.setItem('Allshoes', JSON.stringify(listShoes));
    }
}

function saveShoes(e) {
    e.preventDefault();

  let maSanPham = document.getElementById('txtEditMSP').value;
  let tenSanPham = document.getElementById('txtEditTSP').value;
  let tenThuongHieu = document.getElementById('txtEditTHieu').value;
  let size = document.getElementById('txtEditSize').value;
  let soLuong = document.getElementById('txtEditSL').value;
  let giaBan = document.getElementById('txtEditGiaBan').value;
  let giaMua = document.getElementById('txtEditGiaMua').value;
  let imgUrl = document.getElementById('txtfileToUpload').value;
  if (size <= 30) {
    alert("Mời nhập size")
  }
  else if (soLuong <= 0) {
    alert("Bạn chưa nhập số lượng");
  } else {
    for (let i = 0; i < listShoes.length; i++) {
      const shoess = listShoes[i];
      if (shoess.maSanPham === maSanPham) {
        shoess.tenSanPham = tenSanPham;
        shoess.tenThuongHieu = tenThuongHieu;
        shoess.size = size;
        shoess.soLuong = soLuong;
        shoess.giaBan = giaBan;
        shoess.giaMua = giaMua;
        shoess.imgUrl = imgUrl;
        break;
      }
    }

        displayListShoes(listShoes);

        document.getElementById('frmEditShoes').reset();
        $('#EditShoes').modal('hide');
        localStorage.setItem('Allshoes', JSON.stringify(listShoes));

    }
}
/////////===========Xóa==========///////////
function deleteClother(maSanPham) {
    if (confirm("Bạn muốn xóa SP này ?")) {
        for (let i = 0; i < listShoes.length; i++) {
            const shoess = listShoes[i];
            if (shoess.maSanPham === maSanPham) {
                listShoes.splice(i, 1);
                break;
            }
        }
        displayListShoes(listShoes);
        localStorage.setItem('Allshoes', JSON.stringify(listShoes));

    }
}
////=============Sửa============////

function EditShoes(maSanPham) {
    let currentShoes;
    for (let i = 0; i < listShoes.length; i++) {
        const shoess = listShoes[i];
        if (shoess.maSanPham === maSanPham) {
            currentShoes = shoess;
            break;
        }
    }

    $('#EditShoes').modal('show');

    document.getElementById('txtEditMSP').value = currentShoes.maSanPham;
    document.getElementById('txtEditTSP').value = currentShoes.tenSanPham;
    document.getElementById('txtEditTHieu').value = currentShoes.tenThuongHieu;
    document.getElementById('txtEditSize').value = currentShoes.size;
    document.getElementById('txtEditSL').value = currentShoes.soLuong;
    document.getElementById('txtEditGiaBan').value = currentShoes.giaBan;
    document.getElementById('txtEditGiaMua').value = currentShoes.giaMua;
  document.getElementById('txtfileToUpload').value = currentShoes.imgUrl;

    localStorage.setItem('Allshoes', JSON.stringify(listShoes));
}


//=============Tìm Kiếm====================//
function Search() {
  let newList = [];
  document.getElementById("status").innerHTML = "";
  let codeSearch = document.getElementById("searchCode").value;
  let nameSearch = document.getElementById("searchName").value;
  let brandSearch = document.getElementById("searchBrand").value;
  if (codeSearch == "" && nameSearch == "" && brandSearch == "") {
    displayListShoes(listShoes);
    return;
  }
  for (let i = 0; i < listShoes.length; i++) {
    const element = listShoes[i];
    if ((element.tenSanPham.toLowerCase().includes(nameSearch.toLowerCase()) || nameSearch == "")
      && ((codeSearch.toLowerCase() === element.maSanPham.toLowerCase()) || codeSearch == "")
      && (element.tenThuongHieu.toLowerCase().includes(brandSearch.toLowerCase()) || brandSearch == "")) {
      newList.push(element);
    }

  }
  displayListShoes(newList);
  if (newList.length == 0) document.getElementById("status").innerHTML = `Không tìm thấy sản phẩm!`;
  if (newList.length != 0) document.getElementById("status").innerHTML = `Có ${newList.length} kết quả tìm được `;
}

// function readURL(input) {
//             if (input.files && input.files[0]) {
//                 var reader = new FileReader();

//                 reader.onload = function (e) {
//                     $('#fileToUpload')
//                         .attr('src', e.target.result);
//                 };

//                 reader.readAsDataURL(input.files[0]);
//             }
//         }