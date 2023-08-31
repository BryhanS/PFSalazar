"use strict";

class Producto {
  constructor(id, nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}

const productos = [];

productos.push(new Producto("1", "Pan Especial", 3.5, "product-1.png"));
productos.push(new Producto("2", "Bagette", 1.5, "product-2.png"));
productos.push(new Producto("3", "Pan Yema", 0.5, "product-3.png"));
productos.push(new Producto("4", "Molde Artesanal", 12, "product-4.png"));
productos.push(new Producto("5", "Pan al Ajo", 7.5, "product-5.png"));
productos.push(new Producto("6", "Molde Integral", 15.5, "product-6.png"));

// Objetivo crear un simulador interactivo que pida la cantidad de producto que desea el cliente eh indique cuanto debera pagar

function mensaje(texto) {
  switch (texto) {
    case "saludo":
      alert("Estimado cliente gracias por visitar la web de Santa Maria!!!");
      break;
    case "despedida":
      alert(
        "Estimado cliente gracias por visitar nuestra pagina, Esperamos pronto su proxima compra!!"
      );
      break;
  }
}

function catalogo() {
  let string =
    "Para poder comprar debe ingresar un numero mostrado en nuestro catalogo";

  productos.forEach((producto) => {
    string += `\n ${producto.id}.- ${producto.nombre} s/ ${producto.precio}`;
  });

  let id = parseInt(prompt(string));

  if (isNaN(id) || id > 6 || id < 0) {
    mensaje("despedida");
  }
  return id;
}

function loopCompra() {
  let solicitud =
    "Holas Cliente de Santa Maria, agraderia indicarnos la cantidad de Pan especial que llevara el dia de hoy: ";
  let cantidadComprar = parseInt(prompt(solicitud));

  while (isNaN(cantidadComprar) || cantidadComprar <= 0) {
    if (isNaN(cantidadComprar)) {
      alert("Ingresa la cantidad a ingresar");
      cantidadComprar = parseInt(prompt(solicitud));
    } else {
      alert("Ingresa una cantidad mayor a 0");

      cantidadComprar = parseInt(prompt(solicitud));
    }
  }

  return cantidadComprar;
}

function totalPagar(cantidad, precio, nombre) {
  let total = parseFloat(cantidad * precio);

  alert(
    `Estimado cliente gracias por compra ${nombre} su cuenta es de S/ ${total}.00, agradeceriamos que se acerque a pagar en el local mas cercano!`
  );
}

function ingresoWeb() {
  mensaje("saludo");
  let ingresar = prompt(
    "¿Desea comprar nuestros panes, ingresar SI o NO en el mensaje"
  );
  if (ingresar.toLowerCase() === "si") {
    const idProducto = catalogo();
    const cantidad = loopCompra();
    const producto = productos.find(
      (item) => item.id === idProducto.toString()
    );
    totalPagar(cantidad, producto.precio, producto.nombre);
    mensaje("despedida");
  } else {
    mensaje("despedida");
  }
}

ingresoWeb();
