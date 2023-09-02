"use strict";

class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = `product-${id}.png`;
    this.altinf = `la imagen contiene ${nombre}`;
    this.cantidad = 1;
  }
}

const productos = [];

productos.push(new Producto("1", "Pan Especial", 3.5));
productos.push(new Producto("2", "Bagette", 1.5));
productos.push(new Producto("3", "Pan Yema", 0.5));
productos.push(new Producto("4", "Molde Artesanal", 12));
productos.push(new Producto("5", "Pan al Ajo", 7.5));
productos.push(new Producto("6", "Molde Integral", 15.5));
productos.push(new Producto("7", "Pan Arabe", 0.5));
productos.push(new Producto("8", "Pan Ciabatta", 0.3));
productos.push(new Producto("9", "Pan con Pasas", 1.9));
productos.push(new Producto("10", "Chancay", 1.5));
productos.push(new Producto("11", "Chocoduca", 0.25));
productos.push(new Producto("12", "Caramanduca", 0.3));

JSON.parse(localStorage.getItem("productos")) ||
  localStorage.setItem("productos", JSON.stringify(productos));
