class Jarra {
    constructor(capacidad, cantidad) {
        this._capacidad = capacidad;
        this._cantidad = cantidad;
    }

    get cantidad(){
        return this._cantidad;
    }
    
    set cantidad(v) {
        if (v >= 0 && v <= this._capacidad) {
            this._cantidad = v;
        }
    }

    // toString
    toString() {
        console.log(`La jarra tiene una capacidad de ${this._capacidad} litros y está llena con una cantidad de ${this._cantidad} litros.`);
    }

    // metodos
    llenar() {
        this._cantidad = this.capacidad;
    }

    vaciar() {
        this._cantidad = 0;
    }

    llenarDesde(jarra2) {
        let capacidadRestante = (this._capacidad - this._cantidad);

        if(capacidadRestante > jarra2._cantidad){
            this._cantidad += jarra2._cantidad;
            jarra2._cantidad = 0;
        }else{
            this._cantidad = this._capacidad;
            jarra2._cantidad -= capacidadRestante;
        }
    }

    static comparar(jarra1,jarra2) {
        if (jarra1._cantidad > jarra2._cantidad) {
            return jarra1;
        } else {
            return jarra2;
        }
    }
}