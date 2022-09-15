//creamos una array donde el cliente mira los productos
class Producto{
    constructor(idProducto, nombre, precio){
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.precio = precio;
    }
}
const productos = [
    new Producto(1, "remera seleccion", 19000),
    new Producto(2, "short seleccion", 17000),
    new Producto(3, "botines", 15000),
    ];
console.log(productos);

// el cliente ve la lista de productos mediante la consola
let lista = prompt ("escriba 'lista de productos'")
for(const item of productos){
    console.log (item)
}

//hacemos la funcion donde el cliente obtiene un descuento según el metodo de pago
const precioFinal = (metedoPago) => {
    console.log(metedoPago)
    if (metedoPago == "efectivo"){
            descuento = producto.precio * 0.10        
    } else{
            descuento = producto.precio * 0.05  
        
    }
    console.log(descuento)
    let msjDto = `Este es su descuento
    ${descuento}`;
    alert(msjDto)
}

//el cliente elige el producto
let nombre = prompt ("ingrese el nombre producto")
let producto = productos.find(item => item.nombre === nombre);
console.log (producto)
let mensaje2 = `
Id: ${producto.idProducto}
Nombre: ${producto.nombre}
Precio: $${producto.precio}
`;
alert(mensaje2);

//el cliente elige el metodo de pago
let metedoPago = prompt ("ingrese metedo de pago 'efectivo o tarjeta'")
let descuento
console.log(metedoPago)
precioFinal (metedoPago)

