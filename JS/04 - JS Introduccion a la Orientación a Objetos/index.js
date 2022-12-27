// Importar clases
import {CuentaCorriente} from './CuentaCorriente.js';
import {Cliente} from './Cliente.js';

const cliente = new Cliente();
cliente.nombreCliente = 'Leonardo';
cliente.dniCliente = '1234567';
cliente.rutCliente = '124678';

const cuentaDeLeonardo = new CuentaCorriente();
cuentaDeLeonardo.numero = '1';
cuentaDeLeonardo.agencia = '001';
cuentaDeLeonardo.cliente = cliente;
//cuentaDeLeonardo.#saldo = 10;

let saldo = cuentaDeLeonardo.verSaldo(); 

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log('El Saldo actual es (cuentaDeLeonardo) '+saldo);

const cliente2 = new Cliente();
cliente2.nombreCliente = 'Maria';
cliente2.dniCliente = '765233';
cliente2.rutCliente = '98765';

const cuentaDeMaria = new CuentaCorriente();
cuentaDeMaria.numero = '2';
cuentaDeMaria.agencia = '002';
cuentaDeMaria.setCliente = cliente2;

// if (cuentaDeMaria.cliente){
//     console.log(cuentaDeMaria.cliente);
// }else{
//     console.log(cuentaDeMaria);
// }
console.log(cuentaDeMaria.getCliente);
let parametroValor = 100;

console.log('Parámetro Valor', parametroValor);
cuentaDeLeonardo.transferirParaCuenta(100,cuentaDeMaria);
console.log('Parámetro Valor', parametroValor);
console.log('cuenta De Maria', cuentaDeMaria);
// const saldoMaria = cuentaDeMaria.verSaldo();

// console.log('El Saldo actual es (cuentaDeMaria) '+saldoMaria);

// const saldoLeonardo = cuentaDeLeonardo.verSaldo();
// console.log('El Saldo actual es (cuentaDeLeonardo) '+saldoLeonardo);