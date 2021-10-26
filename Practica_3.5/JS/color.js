<<<<<<< HEAD
nombre = prompt("Introduce tu nombre:")
ape = prompt("Introduce tu apellido:")
salario = parseFloat(prompt("Introduce tu salario con 2 decimales:"))
edad = prompt("Introduce tu edad:")
inc = 0;


if (salario >= 1000 && salario <= 2000) {

    if (edad > 45) {

        salario = salario+ salario * 0.03;

    } else if (edad <= 45) {

        salario = salario + salario * 0.1;

    }

} else if (salario < 1000) {

    if (edad > 45) {

        salario = salario + salario * 0.15;

    } else if (edad >= 30 && edad <= 45) {

        salario = salario + salario * 0.03;

    } else if (edad < 30) {

        salario = 1100;

    }

}

alert("Nombre " + nombre + "\n" + "Apellidos " + ape + "\n" + "Salario " + salario.toFixed(2) + "\n" + "Edad " + edad)

=======
nombre = prompt("Introduce tu nombre:")
ape = prompt("Introduce tu apellido:")
salario = parseFloat(prompt("Introduce tu salario con 2 decimales:"))
edad = prompt("Introduce tu edad:")
inc = 0;


if (salario >= 1000 && salario <= 2000) {

    if (edad > 45) {

        salario = salario+ salario * 0.03;

    } else if (edad <= 45) {

        salario = salario + salario * 0.1;

    }

} else if (salario < 1000) {

    if (edad > 45) {

        salario = salario + salario * 0.15;

    } else if (edad >= 30 && edad <= 45) {

        salario = salario + salario * 0.03;

    } else if (edad < 30) {

        salario = 1100;

    }

}

alert("Nombre " + nombre + "\n" + "Apellidos " + ape + "\n" + "Salario " + salario.toFixed(2) + "\n" + "Edad " + edad)

>>>>>>> 488ba894eb8d7d281d5897499a7383ea9e23b8f1
