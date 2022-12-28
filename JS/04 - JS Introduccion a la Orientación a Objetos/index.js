// Importar clases
import {CuentaCorriente} from './CuentaCorriente.js';
import {Cliente} from './Cliente.js';

const cliente = new Cliente('Leonardo', '1234567', '124678');
const cliente2 = new Cliente('Maria', '765233', '98765');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente, '2', '002');

//cuentaDeLeonardo.#saldo = 10;
let saldo = cuentaDeLeonardo.verSaldo(); 

saldo = cuentaDeLeonardo.depositoEnCuenta(150);

console.log(CuentaCorriente.cantidadCuentas);