"use strict";

import { productList } from "./cart.js";
import { CardsProducts } from "./product.js";

const totalSum = document.getElementById("totalSum");
let carrito = JSON.parse(sessionStorage.getItem("carrito"));

export const closePopup = () => {
  document.getElementById("popup1").style.display = "none";
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
};

export const addCantidad = (id) => {
  const indexProductoCarrito = carrito.findIndex(
    (producto) => producto.id === id
  );
  carrito[indexProductoCarrito].cantidad++;

  sessionStorage.setItem("carrito", JSON.stringify(carrito));

  let input = document.getElementById(`in-${id}`);
  let monto = document.getElementById(`m-${id}`);

  input.value = carrito[indexProductoCarrito].cantidad;
  monto.innerText = `S/.${(carrito[indexProductoCarrito].cantidad * carrito[indexProductoCarrito].precio).toFixed(2)}`;
};

export const decreaseCantidad = (id) => {
  const indexProductoCarrito = carrito.findIndex(
    (producto) => producto.id === id
  );

  carrito[indexProductoCarrito].cantidad--;

  let input = document.getElementById(`in-${id}`);
  input.value = carrito[indexProductoCarrito].cantidad;

  if (carrito[indexProductoCarrito].cantidad < 1) {
    carrito.splice(indexProductoCarrito, 1);
    location.reload();
  }
  sessionStorage.setItem("carrito", JSON.stringify(carrito));
};
