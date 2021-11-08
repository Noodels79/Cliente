class Calculadora {
    constructor() {
        this._resul = 0;
        this._numero1 = 0; this._numero2 = 0;
    }
    set resultado(accion) {
        switch (accion) {
            case 1:
                this._resultado = this._numero1 + this._numero2;
                break;
            case 2:
                this._resultado = this._numero1 - this._numero2;
                break;
        }
    }
    get resultado() {
        var cadena = "El resultado es: " + this._resultado;
        document.getElementById("salida").innerHTML = cadena;
    }
    datos() {
        let x, y;
        x = parseInt(prompt("Dame el primer operando: ", "0"));
        y = parseInt(prompt("Dame el segundo operando", "0"));
        if (isNaN(x && y) == false) {
            this._numero1 = x;
            this._numero2 = y;
            
        } else prompt("No son números", "0");
    }
}
function programa(operacion) {
    var objCalcula = new Calculadora();
    objCalcula.datos();
    objCalcula.resultado = operacion;
    objCalcula.resultado;
}