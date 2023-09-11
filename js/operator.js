"use strict";

import { productList } from "./cart.js";
import { carrito } from "./app.js";

const totalSum = document.getElementById("totalSum");
export const closePopup = (idHtml) => {
  document.getElementById(idHtml).style.display = "none";
};

export const closeCart = () => {
  document.getElementById("idCart").classList.add("close");
};

export const generarTotales = () => {
  let total = [];
  carrito.forEach((producto) => {
    const { cantidad, precio } = producto;

    let resultado = cantidad * precio;

    total.push(resultado);
  });

  const costoTotal = total.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  totalSum.innerHTML = `s/. ${costoTotal.toFixed(2)}`;
  return costoTotal.toFixed(2);
};

export const addCantidad = (id) => {
  const indexProductoCarrito = carrito.findIndex(
    (producto) => producto.id === id
  );
  carrito[indexProductoCarrito].cantidad++;

  sessionStorage.setItem("carrito", JSON.stringify(carrito));

  productList(carrito);
  generarTotales();
};

export const decreaseCantidad = (id) => {
  const indexProductoCarrito = carrito.findIndex(
    (producto) => producto.id === id
  );

  carrito[indexProductoCarrito].cantidad--;

  if (carrito[indexProductoCarrito].cantidad < 1) {
    carrito.splice(indexProductoCarrito, 1);
  }
  sessionStorage.setItem("carrito", JSON.stringify(carrito));
  productList(carrito);
  generarTotales();
};
