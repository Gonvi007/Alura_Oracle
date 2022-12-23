// Importar clases
import {CuentaCorriente} from './CuentaCorriente.js';
import {Cliente} from './Cliente.js';

const cuentaDeLeonardo = new CuentaCorriente();
//cuentaDeLeonardo.#saldo = 10;
let saldo = cuentaDeLeonardo.verSaldo(); 
console.log('El Saldo actual es '+saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(100);
console.log('El Saldo actual es '+saldo);

saldo = cuentaDeLeonardo.retirarDeCuenta(100);
console.log('El Saldo actual es '+saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(10)
console.log('El Saldo actual es '+saldo);