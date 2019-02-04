export class Tarea {
    nombre: String;

    constructor(nombre?) {
        this.nombre = nombre;
    }

    toString() {
        return this.nombre;
    }
}
