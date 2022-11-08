
// Definicion de una lista con tipo de dato alfanum+erico
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago, MonteVideo");

// Definición de una lista de forma abreviada
const paisesDisponibles = ["Colombia", "Perú", "Chile", "Brasil", "Argentina", "blabla"];

const cantidaCiudades = ciudadesDisponibles.length;
// console.log(`En la lista de ciudades tenemos ${cantidaCiudades} elementos`);
// console.log(`En la lista de paises tenemos ${paisesDisponibles.length} elementos`);

// Remover el primer elemento
ciudadesDisponibles.shift();
// console.log(ciudadesDisponibles);
// console.log(`En la lista de paises tenemos ${ciudadesDisponibles.length} elementos`);

// Remover el ultimo elemento
ciudadesDisponibles.pop();
// console.log(ciudadesDisponibles);
// console.log(`En la lista de paises tenemos ${ciudadesDisponibles.length} elementos`);

// Filtro de elementos de la lista.
const paisesFiltrados = paisesDisponibles.filter((e)=> e.length >= 6);
console.log(paisesFiltrados)

// Unificar los elementos en una cadena de caracteres
console.log(paisesDisponibles.join('-'));

// Ordenar la lista
console.log(paisesDisponibles.sort());

// Conociendo la posicion
console.log(`Perú esta en la posicion: ${paisesDisponibles.indexOf('Perú')}`);

// Unificar dos listas
const listaPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log(listaPaisesYCiudades);