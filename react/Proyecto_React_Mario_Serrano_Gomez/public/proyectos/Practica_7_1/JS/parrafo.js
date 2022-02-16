var texto = prompt("Escribe el texto que desees");
var posicion;
if (texto != null) {
    do {
        posicion = prompt("Escriba la posición de ese texto (número del 1 al 10)");
        if (posicion != null) {
            posicion = parseInt(Number(posicion));
            if (isNaN(posicion) || posicion < 1 ||
                posicion > 10) {
                alert("Número no válido");
            }
        }
    } while (posicion != null &&
        (isNaN(posicion) || posicion < 1 || posicion > 10)
    );
    //colocación del texto en su posición
    var lista = document.getElementsByTagName("ol")[0];
    var nuevoElemento = document.createElement("li");
    nuevoElemento.innerHTML = `<strong>' + ${texto} + '</strong>`;
    if (posicion == 10) {
        lista.appendChild(nuevoElemento);
    } else {
        let liSiguiente = lista.children[posicion - 1];
        lista.insertBefore(nuevoElemento, liSiguiente);
    }
}