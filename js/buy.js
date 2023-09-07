"use strict";

import { productList } from "./cart.js";
let carrito = JSON.parse(sessionStorage.getItem("carrito"));
let productosDisponibles = JSON.parse(localStorage.getItem("productos"));

export const comprarProducto = (idProducto) => {
  document.getElementById("idCart").classList.remove("close");

  const producto = productosDisponibles.find(
    (producto) => producto.id === idProducto
  );

  const { id, nombre, precio, imagen } = producto;

  const productoCarrito = carrito.find(
    (producto) => producto.id === idProducto
  );

  if (productoCarrito === undefined) {
    const nuevoProductoCarrito = {
      id: id,
      nombre: nombre,
      precio: precio,
      imagen: imagen,
      cantidad: 1,
    };
    carrito.push(nuevoProductoCarrito);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
  } else {
    const indexProductoCarrito = carrito.findIndex(
      (producto) => precio.id === idProducto
    );
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
  }

  carrito = JSON.parse(sessionStorage.getItem("carrito"));
  productList();
};
