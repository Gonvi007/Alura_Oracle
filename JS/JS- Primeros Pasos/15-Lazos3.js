const presupuestoDisponible = 400;
const datos =
[
    {
        'ciudad' : 'Bogotá',
        'precio' : 500
    },
    {
        'ciudad' : 'Lima',
        'precio' : 400
    },
    {
        'ciudad' : 'Santiago',
        'precio' : 380
    },
    {
        'ciudad' : 'Montevideo',
        'precio' : 200
    }

];

let i = 0;
// While--- 0 o más veces
/*while (i < datos.length && datos[i].precio > presupuestoDisponible && i < datos.length) {
    i++;
}*/
// FOR...  Valor inicial para un valor final
let ciudadSeleccionada = '';
for (let i = 0; i < datos.length && ciudadSeleccionada; i++) {
    if (datos[i].precio <= presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;
        break;
    }
    
}

if (ciudadSeleccionada == '')
    console.log("No tenemos pasajes disponibles ");
else
    console.log("Puedes comprar para: " + ciudadSeleccionada);