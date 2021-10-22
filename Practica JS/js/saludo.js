var arr = new Array(0, 0, 0, 0, 0, 0)
var a = 50
alert("Estas son las combinaciones de la loteria de los ultimos 50 dias")
for (s = 1; s <= a; s++) {
    document.write("la combinacion numero " + s + " es: ")
    for (i = 0; i < arr.length; i++) {

        j = Math.floor((Math.random() * 48) + 1)

        while (arr.includes(j)) {
            j = Math.floor((Math.random() * 48) + 1)

        }
        arr[i] = j
        document.write(arr[i] + " ")
    }
    document.write("<br>")
}