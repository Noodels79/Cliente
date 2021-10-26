<<<<<<< HEAD
var arr = new Array(0, 0, 0, 0, 0, 0)
var a = 50
document.write("<h1>Estas son las combinaciones de la lotería de los últimos 50 días</h1>")
for (s = 1; s <= a; s++) {
    document.write("la combinacion numero " + s + " es: <br>")
    for (i = 0; i < arr.length; i++) {

        j = Math.floor((Math.random() * 49) + 1)

        while (arr.includes(j)) {
            j = Math.floor((Math.random() * 49) + 1)

        }
        arr[i] = j
        document.write(arr[i] + " <br>")
    }
    document.write("<br>")
    arr = new Array(0, 0, 0, 0, 0, 0)
=======
var arr = new Array(0, 0, 0, 0, 0, 0)
var a = 50
document.write("<h1>Estas son las combinaciones de la lotería de los últimos 50 días</h1>")
for (s = 1; s <= a; s++) {
    document.write("la combinacion numero " + s + " es: <br>")
    for (i = 0; i < arr.length; i++) {

        j = Math.floor((Math.random() * 49) + 1)

        while (arr.includes(j)) {
            j = Math.floor((Math.random() * 49) + 1)

        }
        arr[i] = j
        document.write(arr[i] + " <br>")
    }
    document.write("<br>")
    arr = new Array(0, 0, 0, 0, 0, 0)
>>>>>>> 488ba894eb8d7d281d5897499a7383ea9e23b8f1
}