import { Empleado } from "./Empleado";

export class Gerente extends Empleado{

    constructor(nombre, dni, salario) {
        super(nombre, dni, salario);
    }

    verBonificacion() {
        const bono = 5;
        return super._verBonificacion(bono);
    }
}