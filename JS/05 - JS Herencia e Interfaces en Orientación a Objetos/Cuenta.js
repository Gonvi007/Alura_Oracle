export class Cuenta {
	#cliente;
    #saldo;

    constructor(cliente, numero, agencia, saldo) {
        if (this.constructor == Cuenta) {
            throw new Error('No se debe instanciar objetos de la clase cuenta');
        }
        this.#cliente = cliente;
    	this.numero = numero;
    	this.agencia = agencia;
    	this.#saldo = saldo;
    }

    depositoEnCuenta(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        }
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        // Metodo Abstracto
        throw new Error('Debe implementar el método retirarDeCuenta en su clase')
    }

    _retirarDeCuenta(valor, comision) {
        valor = valor * (1 + comision/100);
        // if (this.tipo == 'Corriente') {
        //     valor = valor * 1.05;
        // } else if (this.tipo == 'Ahorro') {
        //     valor = valor * 1.02;
        // }
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        }
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor*1000;
    }

    prueba() {
        console.log('Metodo Padre');
    }
}