class C {
    x() {
        return 1;
    }
}

class CC extends C {
    y() {
        return 2;
    }
}

const cc = new CC();
console.assert(cc.x() === 1);
console.assert(cc.y() === 2);
console.assert(cc instanceof C);
/*Para definir la herencia con class utilizamos la 
instrucción extends seguida de la clase padre de la 
que heredamos. Esto modifica la cadena de prototipos y 
hace que el prototipo de la clase hija apunte al 
constructor de la clase padre.*/