"use strict";
import { comprarProducto } from "./cart";

const divProducto = document.getElementById("shop");
const popup1 = document.getElementById("close-btn");
const closeButton = document.getElementById("closeShopping");

export let productosDisponibles = JSON.parse(localStorage.getItem("productos"));

let currentPageURL = window.location.href;

function closePopup() {
  document.getElementById("popup1").style.display = "none";
}

function closeCart() {
  document.getElementById("idCart").classList.add("close");
}

export const CardsProducts = (productos) => {
  divProducto.innerHTML = "";
  productosDisponibles.forEach((producto, key) => {
    const { id, nombre, imagen, altinf } = producto;

    let card = document.createElement("div");
    card.className = "card-body";
    card.innerHTML = `
        <img
        src="../assets/img/${imagen}"
        alt="${altinf}"
        />
        <span>${nombre}</span>
        <button id="btn-${id}" type="button">add to cart</button>
    
    `;

    divProducto.appendChild(card);

    const btnComprar = document.getElementById(`btn-${id}`)
    btnComprar.addEventListener('click',() => comprarProducto(id))
  });
};

if (currentPageURL.includes("index")) {
  //close popup index
  popup1.addEventListener("click", () => {
    closePopup();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      closePopup();
    }
  });
} else {
  document.addEventListener("DOMContentLoaded", () => {
    CardsProducts(productosDisponibles);
  });

  closeButton.addEventListener("click", () => {
    closeCart();
  });
}
