class Jarra {
    constructor(capacidad, cantidad) {
        this._capacidad = capacidad;
        this._cantidad = cantidad;
    }

    get cantidad(){
        return this._cantidad;
    }

    set cantidad(c){
        if(c<0) throw new Error('La cantidad debe ser un número positivo');
        this._cantidad=Math.min(c,this._capacidad);
    }

    get capacidad(){
        return this._capacidad;
    }

    llenar() {
        this._cantidad = this._capacidad;
    }

    vaciar() {
        this._cantidad = 0;
    }

    toString() {
        return `Capacidad: ${this._capacidad} cantidad: ${this._cantidad}`;
    }

    llenarDesde(jarra2) {
        let cantidadRestante = this._capacidad - this._cantidad;
        if (jarra2._cantidad <= cantidadRestante) {
            this._cantidad += jarra2._cantidad;
            jarra2.vaciar();
        } else {
            this._cantidad += cantidadRestante;
            jarra2._cantidad -= cantidadRestante;
        }
    }

    static comparar(jarra1, jarra2) {
        if (jarra1._cantidad > jarra2._cantidad) return jarra1;
        else return jarra2;
    }
}