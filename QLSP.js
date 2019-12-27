function getDefaultShoes() {
  return {
    'maSanPham': '',
    'tenSanPham': '',
    'tenThuongHieu': '',
    'size': 0,
    'soLuong': 0,
  };
};
let listShoes = [];
let shoes1 = getDefaultShoes();
shoes1.maSanPham = 'SP001';
shoes1.tenSanPham = 'Adidas Ultraboost';
shoes1.tenThuongHieu = 'Adidas';
shoes1.size = 40;
shoes1.soLuong = 10;
listShoes.push(shoes1);

let shoes2 = getDefaultShoes();
shoes2.maSanPham = 'SP002';
shoes2.tenSanPham = 'Adidas Alphaboost';
shoes2.tenThuongHieu = 'Adidas';
shoes2.size = 41;
shoes2.soLuong = 15;
listShoes.push(shoes2);

let shoes3 = getDefaultShoes();
shoes3.maSanPham = 'SP003';
shoes3.tenSanPham = 'Nike Epic React';
shoes3.tenThuongHieu = 'Nike';
shoes3.size = 42;
shoes3.soLuong = 10;
listShoes.push(shoes3);

let shoes4 = getDefaultShoes();
shoes4.maSanPham = 'SP004';
shoes4.tenSanPham = 'Nike Air max';
shoes4.tenThuongHieu = 'Nike';
shoes4.size = 43;
shoes4.soLuong = 20;
listShoes.push(shoes4);

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
    listShoes.push(newShoes);

    displayListShoes(listShoes);

    document.getElementById('frmnewShoes').reset();
    $('#add-shoes').modal('hide');
  }
}
function saveShoes(e) {
  e.preventDefault();

  let maSanPham = document.getElementById('txtEditMSP').value;
  let tenSanPham = document.getElementById('txtEditTSP').value;
  let tenThuongHieu = document.getElementById('txtEditTHieu').value;
  let size = document.getElementById('txtEditSize').value;
  let soLuong = document.getElementById('txtEditSL').value;
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
        break;
      }
    }

    displayListShoes(listShoes);

    document.getElementById('frmEditShoes').reset();
    $('#EditShoes').modal('hide');
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
}
