class Jarra {

    capacidad:number;
    cantidad:number;

    constructor(capacidad:number, cantidad:number) {
        this.capacidad = capacidad;
        this.cantidad = cantidad;
    }

    toString():string {
        return "Capacidad: " + this.capacidad + " - Cantidad: " + this.cantidad;
    }

    //METODOS
    //jarra1.llenar() : llenará completamente la jarra hasta la capacidad
    llenar():void {
        this.cantidad = this.capacidad;
    }

    //jarra1.vaciar() : vaciará completamente la jarra.
    vaciar():void {
        this.cantidad = 0;
    }
    static llenarDesde(obj1:Jarra, obj2:Jarra) {
        var capacidadRestante = obj1.capacidad - obj1.cantidad; //comprueba cuanta capacidad hay disponibles en obj1
        var cantidadVertir = obj2.cantidad - capacidadRestante; //comprueba si cabe o no la cantidad en la capacidadRestante

        if (cantidadVertir > 0 && cantidadVertir != 0) { //si es mayor a 0 caben los litros y es 0 no
            obj1.cantidad = obj1.capacidad; //Si da positivo es que ha vertido hasta el maximo
            obj2.cantidad = obj2.cantidad - capacidadRestante; //restamos la cantidadRestante a la capacidad que tenia que seria lo que volcó
        } else {
            obj1.cantidad += obj2.cantidad;
            obj2.cantidad = 0;
        }
    }

    //metodo de instancia
    llenarDesde2(obj2:Jarra) {
        var capacidadRestante = this.capacidad - this.cantidad; //comprueba cuanta capacidad hay disponibles en obj1
        var cantidadVertir = obj2.cantidad - capacidadRestante; //comprueba si cabe o no la cantidad en la capacidadRestante

        if (cantidadVertir > 0 && cantidadVertir != 0) { //si es mayor a 0 caben los litros y si es 0 no cabe mas
            this.cantidad = this.capacidad; //Si da positivo es que ha vertido hasta el maximo
            obj2.cantidad = obj2.cantidad - capacidadRestante; //restamos la cantidadRestante a la capacidad que tenia que seria lo que volcó
        } else {
            //si la capacidad actual del obj1 es mayor a la cantidad del obj2 vierte todo
            this.cantidad += obj2.cantidad;
            obj2.cantidad = 0;
        }
    }

    static comparar(obj1:Jarra, obj2:Jarra) {
        var mayor = 0;
        if (obj1.cantidad > obj2.cantidad) {
            mayor = 0; //si el primero es el mayor devuelve 0
        } else {
            mayor = 1; //si el segundo es el mayor devuelve 1
        }
        return mayor;
    }

}


class JarraLimitada extends Jarra{

    constructor(capacidad:number, cantidad:number) {
        if (capacidad<=10) {
            super(capacidad, cantidad);
        }
        super(capacidad, cantidad);
    }

    vaciarMitad():void {
        this.cantidad = this.cantidad/2;
    }

}


