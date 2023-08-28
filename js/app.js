"use strict";

const divProducto = document.getElementById("shop");

let productosVenta = JSON.parse(localStorage.getItem("productos"));

document.addEventListener("DOMContentLoaded", () => {
  CardsProducts(productosVenta);
});

export const CardsProducts = (productos) => {
  divProducto.innerHTML = "";
  productosVenta.forEach((producto) => {
    const { nombre, precio, imagen, altinf } = producto;

    let card = document.createElement("div");
    card.className = "card-body";
    card.innerHTML = `
        <img
        src="../assets/img/${imagen}"
        alt="${altinf}"
        />
        <span>${nombre}</span>
        <button type="button">add to cart</a>
    
    `;

    divProducto.appendChild(card);
  });
};
