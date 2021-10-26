<<<<<<< HEAD
var ale = Math.floor((Math.random() * 99) + 1);
e = false
cont = 0
u=false;
alert("Bienvenido al juego aleatorio")
alert("Las reglas son que debe escribir un numero entre 1 y 100")
alert("Pulse cancelar para salir")

do {

    do {
        num_ped = prompt("Ingrese el numero por teclado: ")
        if (num_ped == "null" || num_ped == null ) {
           u=true
        }
        cont++



    } while ((num_ped < 1 || num_ped > 100) && u==false)

    if (num_ped == ale) {
        alert("Has ganado ese era el numero " + num_ped + " en " + cont + " intentos")
        confirmar = confirm("¿Quieres volver a jugar")
        if (confirmar == true) {
            e = false
        } else if (confirmar == false) {
            e = true
        }
    } else if (num_ped == "null" || num_ped == null ) {
        e = true
        alert("Muchas gracias por tu no juego humano")
    } else if (num_ped < ale) {
        alert("El numero es mayor")
        e = false
    } else if (num_ped > ale) {
        alert("El numero es menor")
        e = false
    } else if (isNaN(num_ped)) {
        e = false
        alert("El caracter introducido no es un numero")
    }





} while (e == false)






=======
var ale = Math.floor((Math.random() * 99) + 1);
e = false
cont = 0
u=false;
alert("Bienvenido al juego aleatorio")
alert("Las reglas son que debe escribir un numero entre 1 y 100")
alert("Pulse cancelar para salir")

do {

    do {
        num_ped = prompt("Ingrese el numero por teclado: ")
        if (num_ped == "null" || num_ped == null ) {
           u=true
        }
        cont++



    } while ((num_ped < 1 || num_ped > 100) && u==false)

    if (num_ped == ale) {
        alert("Has ganado ese era el numero " + num_ped + " en " + cont + " intentos")
        confirmar = confirm("¿Quieres volver a jugar")
        if (confirmar == true) {
            e = false
        } else if (confirmar == false) {
            e = true
        }
    } else if (num_ped == "null" || num_ped == null ) {
        e = true
        alert("Muchas gracias por tu no juego humano")
    } else if (num_ped < ale) {
        alert("El numero es mayor")
        e = false
    } else if (num_ped > ale) {
        alert("El numero es menor")
        e = false
    } else if (isNaN(num_ped)) {
        e = false
        alert("El caracter introducido no es un numero")
    }





} while (e == false)






>>>>>>> 488ba894eb8d7d281d5897499a7383ea9e23b8f1
