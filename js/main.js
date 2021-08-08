//Funciones flecha
const suma  = (a,b) => a + b;
const iva   = x => x * 0.21;
const dolares = d => d * 0.023;


precioProducto = parseInt(prompt(`Ingresar un el precio del costo del producto:`)); 
let nuevoPrecio = suma(precioProducto, iva(precioProducto)); 
document.write(`El precio del producto en pesos uruguayos es ${nuevoPrecio} <br />`);
let precioDolares = dolares(nuevoPrecio);
document.write(`El precio del producto en dólares es ${precioDolares}`);


