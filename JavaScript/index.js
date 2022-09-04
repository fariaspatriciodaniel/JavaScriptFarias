let producto = prompt ("ingrese el nombre del producto").toUpperCase();
let total = 0;
function productosFuncion (producto){
    switch (producto){
        case "PAPAS":
            precio= 120;
            break
        case "GASEOSA":
            precio= 100;
            break
        case "CERVEZA":
            precio= 110;
            break
        case "HAMBURGUESA":
            precio= 180;
            break;
        default:
    }
    return total = total + precio;
}
while (producto != "SALIR"){
    productosFuncion(producto);
    producto = prompt ("ingrese el nombre del producto").toUpperCase();
}
console.log(total);