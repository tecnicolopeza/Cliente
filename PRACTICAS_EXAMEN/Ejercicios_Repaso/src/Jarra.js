class Jarra {

    constructor(capacidad, cantidad) {
        this._capacidad = capacidad;
        this._cantidad = cantidad;
    }

    get capacidad() {
        return this._capacidad;
    }

    set capacidad(x) {
        if (x < 0) throw new Error('La capacidad debe ser un número positivo');
        if (this._capacidad !== x) this._capacidad = x;
    }

    get cantidad() {
        return this._cantidad;
    }

    set cantidad(x) {
        if (x < 0) throw new Error('La cantidad debe ser un número positivo');
        if (this._cantidad !== x) this._cantidad = x;
    }

    //metodos
    llenar() {
        this._cantidad = this._capacidad;
    }

    vaciar() {
        this._cantidad = 0;
    }

    llenarDesde(obj2) {
        var espacioLibre = this._capacidad - this._cantidad; //espacio libre para llenar
        var litrosVerter = 0;
        if (espacioLibre != 0) {
            litrosVerter = obj2._cantidad - espacioLibre; //para saber cuanto podemos verter del obj2 al obj1
            if (litrosVerter >= 0) { //si es mayor/igual a 0 hay mas litros en obj2 que en espacioLibre
                this._cantidad = this._capacidad; //la cantidad seria llenar al maximo
                obj2._cantidad = litrosVerter; //la resta seria lo que queda en obj2._cantidad
            } else {
                this._cantidad += obj2._cantidad; //significaria que cabe mas de lo que tiene obj2 y se sumaria todo a obj1
                obj2._cantidad = 0; //se quedaria a 0
            }
        }
    }

    static comparar(obj1, obj2) {
        var mayor = 0;
        if (obj1.cantidad > obj2.cantidad) {
            mayor = 0; //si el primero es el mayor devuelve 0
        } else {
            mayor = 1; //si el segundo es el mayor devuelve 1
        }
        return mayor;
    }

    toString() {
        return "Capacidad: " + this._capacidad + " - Cantidad: " + this._cantidad;
    }

}