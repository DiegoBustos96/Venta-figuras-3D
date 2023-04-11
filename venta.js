// Mostrar articulos por pantalla.

function mostrarArticulos(){
    console.log("1.Articulo 1");
    console.log("2.Articulo 2");
    console.log("3.Articulo 3");

}

// Validar función de selección del usuario y sumar precio.

function sumarPrecio(seleccion, cantidad, total){
    switch(seleccion){
        case 1:
            total= total + 1000 * cantidad;
            break;
        case 2:
            total = total +2500 *cantidad;
            break;
        case 3:
            total = total + 4000 *cantidad;
            break;
        default:
            console.log("Selección inválida");
        
    }
    return total;

}

// Función principal
function main(){
    // Variable que comprueba si seguirá comprando.
    let continuar = true;
    // Variable que almacena el total de la compra
    let total = 0;

    // Ciclo que permite seleccionar al usuario varios articulos.
    while (continuar){
        mostrarArticulos();
    

    const seleccion = parseInt(prompt("Seleccione un artículo (1-3): "));
    let cantidad = 0;
    while (cantidad <= 0){
        cantidad = parseInt(prompt("Ingrese la cantidad de figuras que desea comprar: "));
        if (cantidad <= 0){
            console.log("Debe ingresar una cantidad mayor a cero");

        }
    }
    // Validar la selección del usuario y sumar el precio.
    total = sumarPrecio(seleccion, cantidad, total);

    // Preguntar si desea seguir comprando.
    const respuesta = prompt("¿Desea seguir comprando? (s/n): ");

    // Si la respuesta es "no", se termina la compra.
    if (respuesta.toLowerCase() === "n"){
        continuar = false;
        }
    }

// Calcular IVA y mostrar el total de la campra.
const iva = total * 0.19;
const totalIva = total + iva;
console.log("Total: $" + total + "CLP");
console.log("IVA (19%): $" + iva + "CLP");
console.log("Total con IVA: $" + totalIva + "CLP");
}
// Llamar a la función principal.
main();