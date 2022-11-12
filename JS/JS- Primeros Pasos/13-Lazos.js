const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
const precioCiudad = new Array(500, 400, 300, 200);
const presupuestoDisponible = 210;

let i = 0;
// While--- 0 o más veces
// Do... 1 o más veces
while (precioCiudad[i] > presupuestoDisponible && i < ciudadesDisponibles.length) {
    i++;
}
if (i == ciudadesDisponibles.length) {
    console.log("No tenemos pasajes disponibles ");
} else {
    console.log("Puedes comprar para: " + ciudadesDisponibles[i]);

}