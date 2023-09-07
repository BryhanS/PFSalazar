"use strict";
import { closePopup, closeCart } from "./operator.js";
import { productList } from "./cart.js";
import { CardsProducts } from "./product.js";

const popup1 = document.getElementById("close-btn");
const closeButton = document.getElementById("closeShopping");

let productosDisponibles = JSON.parse(localStorage.getItem("productos"));
let currentPageURL = window.location.href;

JSON.parse(sessionStorage.getItem("carrito")) === null &&
  sessionStorage.setItem("carrito", JSON.stringify([]));

document.addEventListener("DOMContentLoaded", () => {
  productList();
});

function startingApp() {
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
    CardsProducts();
    document.addEventListener("DOMContentLoaded", () => {
      CardsProducts(productosDisponibles);
    });

    closeButton.addEventListener("click", () => {
      closeCart();
    });
  }
}

startingApp();
