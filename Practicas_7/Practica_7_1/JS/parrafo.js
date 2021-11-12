var texto = prompt("Escribe el texto que desees");
var posicion;
if (texto != null) {
    do {
        posicion = prompt("Escriba la posición de ese texto (número del 1 al 10)");
        if (posicion != null) {
            posicion = parseInt(Number(posicion));
            if (isNaN(posicion) || posicion < 1
                || posicion > 10) {
                alert("Número no válido");
            }
        }
    } while (posicion != null &&
        (isNaN(posicion) || posicion < 1 || posicion > 10)
    );
    //colocación del texto en su posición
    var lista = document.getElementsByTagName("01")[0];
    var nuevoElemento = document.createElement("li");
    nuevoElemento.innerHIML = '<strong>›${texto}</strong>'
    if (posicion == 10) {
        lista.appendChild(nuevoElemento);
    }
    else {
        let liSiguiente = lista.children[posición - 1];
        lista.insertBefore(nuevoElemento, liSiguiente);
    }
}