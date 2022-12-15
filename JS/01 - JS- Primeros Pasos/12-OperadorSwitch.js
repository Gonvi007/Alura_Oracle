// const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
// const ciudadDestino = "Quito";

// let valorPasaje = 0;

// console.log(`Verificando pasajes para  ${ciudadDestino}`);

    //Condición con if
    /*
    if (ciudadDestino == "Bogotá") {
        valorPasaje = 500;
    } else if (ciudadDestino == "Lima") {
        valorPasaje = 400;
    } else if (ciudadDestino == "Santiago") {
        valorPasaje = 380;
    } else if (ciudadDestino == "Montevideo") {
        valorPasaje = 200;
    }*/
    // switch(ciudadDestino) {
    //     case "Bogotá": 
    //         valorPasaje = 500;
    //         break;
    //     case "Lima": 
    //         valorPasaje = 400;
    //         break;
    //     case "Santiago": 
    //         valorPasaje = 380;
    //         break;
    //     case "Montevideo": 
    //         valorPasaje = 200;
    //         break;
    //     default:
    //         console.log(`No hay pasajes para la ciudad indicada`);
    //         break;
    // }
    // if (valorPasaje > 0)
    //     console.log(`El valor del pasaje es: ${valorPasaje}`);


const electronicosDisponibles = new Array("Motorola", "Sansung", "Iphon", "PCGamer");
const productoAdquirir = "iphon";

let precioproducto = 0;

console.log(`Verificando en almacen si hay: ${productoAdquirir}`);
    switch(productoAdquirir) {
        case "Motorola": 
            precioproducto = 500;
            break;
        case "Sansung": 
            precioproducto = 400;
            break;
        case "Iphon": 
            precioproducto = 380;
            break;
        case "PCGamer": 
            precioproducto = 200;
            break;
        default:
            console.log(`No tenemos disponibles ${productoAdquirir} por ahora`);
            break;
    }
    if (precioproducto > 0)
        console.log(`El valor del electronico es: $${precioproducto}`);