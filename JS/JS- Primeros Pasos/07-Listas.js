const ciudad1 = "Bogotá";
const ciudad2 = "Lima";
const ciudad3 = "Santiago";

// Definicion de una lista con tipo de dato alfanum+erico
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago");
// console.log(ciudadesDisponibles);

// Definición de una lista de forma abreviada
const paisesDisponibles = ["Colombia", "Perú", "Chile", "Brasil", "Argentina"];
// console.log(paisesDisponibles);

	paisesDisponibles.push('Uruguay');
	ciudadesDisponibles.push('MonteVideo');
	// console.log(ciudadesDisponibles);
	// console.log(paisesDisponibles);

	paisesDisponibles.unshift('Ecuador');
	ciudadesDisponibles.unshift('OtroPais');

	// Mostrar el elemento con su pocicion
	console.log(ciudadesDisponibles[0]);
	console.log(paisesDisponibles[0]);

	paisesDisponibles.splice(1, 2, 'Venezuela', 'Paraguay');
	console.log(paisesDisponibles)