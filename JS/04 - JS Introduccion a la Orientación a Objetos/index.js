// Definir una clase
class Cliente {
    nombreCliente;
    dniCliente;
    rutaCliente;
}

class CuentaBancaria {
    numeroCuenta;
    saldoCuenta;
    agencia;

    constructor() {
        this.saldoCuenta = 0;
        this.numeroCuenta = '';
        this.agencia = '';
    }
    depositoEnCuenta(valor){
        if (valor >= 0)
            this.saldoCuenta = this.saldoCuenta+valor;
            // this.saldoCuenta += valor;
        return this.saldoCuenta;

    }
    retiroDeCuenta(valor) {
        if (valor <= this.saldoCuenta)
            this.saldoCuenta = this.saldoCuenta-valor;
        return this.saldoCuenta;
    }

    verSaldo() {
        return this.saldoCuenta;
    }
}

const Cliente1 = new Cliente();
Cliente1.nombreCliente = "José";
Cliente1.dniCliente = "345678";
Cliente1.rutaCliente = "J2345678";

const cuentaBancaria1 = new CuentaBancaria();
cuentaBancaria1.numeroCuenta = "345678";
cuentaBancaria1.saldoCuenta = 1000;
cuentaBancaria1.agencia = "BBVA";

console.log(cuentaBancaria1.saldoCuenta);
cuentaBancaria1.depositoEnCuenta(99);
console.log(cuentaBancaria1.saldoCuenta);
cuentaBancaria1.retiroDeCuenta(1000);
console.log(cuentaBancaria1.saldoCuenta);
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

let saldoCuenta = cuentaDeAlexis.verSaldo();
console.log(`El sueldo actual es ${saldoCuenta}`);
const cuentaDeAlexis = new Cliente();



cuentaDeAlexis.nombreCliente = "Alexis Gonzalez Villanueva";
cuentaDeAlexis.dniCliente = "34567";
cuentaDeAlexis.rutaCliente = "Agv45678";

const cuentaBancariaAGV = new CuentaBancaria();
// cuentaBancariaAGV.numeroCuenta = "5678";
// cuentaBancariaAGV.agencia = "Azteca";

console.log(cuentaDeAlexis);
cuentaBancariaAGV.depositoEnCuenta(999);
console.log(cuentaBancariaAGV);
cuentaBancariaAGV.retiroDeCuenta(999);
console.log(cuentaBancariaAGV);
cuentaBancariaAGV.depositoEnCuenta(-9);
console.log(cuentaBancariaAGV);

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

// console.log(Cliente1);
// console.log(cuentaBancaria1);
/*
class Empleado {
    nombreEmpleado;
    dniEmpleado;
    numeroCuenta;
    vendas;
}

const Empleado1 = new Empleado();
Empleado1.nombreEmpleado = "Pepé";
Empleado1.dniEmpleado = "34567";
Empleado1.numeroCuenta = "34567";
Empleado1.vendas = 1234567;

const Empleado2 = new Empleado();
Empleado2.nombreEmpleado = "ertyuioas";
Empleado2.dniEmpleado = "34567892345";
Empleado2.numeroCuenta = "0987654321";
Empleado2.vendas = 98765432;

console.log(Empleado2);
console.log(Empleado1);
*/