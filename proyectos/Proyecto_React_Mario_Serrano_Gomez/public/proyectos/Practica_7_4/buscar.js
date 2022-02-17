let texto = prompt("Escriba la palabra a buscar");
if (texto) {
    window.find(texto);
}
x = document.getElementById("sol");
x.style.color = "blue";
x.style.border = "1px solid red";
x.style.backgroundColor = "yellow";
x.style.fontFamily = "arial";
x.style.textAlign = "justify";
let cssX = window.getComputedStyle(x);
document.write(cssX.fontFamily);