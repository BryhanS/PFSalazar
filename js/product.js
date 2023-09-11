"use strict";

import { comprarProducto } from "./buy.js";

const divProducto = document.getElementById("shop");
let productosDisponibles = JSON.parse(localStorage.getItem("productos"));

export const CardsProducts = (productos) => {
  divProducto.innerHTML = "";
  productosDisponibles.forEach((producto) => {
    const { id, nombre, imagen, altinf } = producto;

    let card = document.createElement("div");
    card.className = "card-body";
    card.innerHTML = `
          <img
          src="../assets/img/${imagen}"
          alt="${altinf}"
          />
          <span>${nombre}</span>
          <button id="btn-${id}" type="button">agregar al carrito</button>
      
      `;

    divProducto.appendChild(card);

    const btnComprar = document.getElementById(`btn-${id}`);
    btnComprar.addEventListener("click", () => comprarProducto(id));
  });
};
