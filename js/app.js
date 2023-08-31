"use strict";

const divProducto = document.getElementById("shop");
const popup1 = document.getElementById("close-btn");

let productosVenta = JSON.parse(localStorage.getItem("productos"));

let currentPageURL = window.location.href;

function closePopup() {
  document.getElementById("popup1").style.display = "none";
}

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
    CardsProducts(productosVenta);
  });
}
