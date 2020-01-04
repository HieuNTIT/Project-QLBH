let listShoes = JSON.parse(localStorage.getItem('Allshoes'));

let content = '';
for (let i = 0; i < listShoes.length; i++) {
    const element = listShoes[i];
    content +=`
        <li> <img src ="${element.imgUrl}"></li>
    `
}
document.getElementById("list").innerHTML = content;