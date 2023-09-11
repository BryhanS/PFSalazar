"use strict";

import { closePopup, closeCart, generarTotales } from "./operator.js";
import { productList } from "./cart.js";
import { CardsProducts } from "./product.js";
import { checkoutShop } from "./checkout.js";

const popup1 = document.getElementById("close-btn");
const closeButton = document.getElementById("closeShopping");
const closeCheckout = document.getElementById("closeCheckout");
const endBuy = document.getElementById("endBuy");

let productosDisponibles = JSON.parse(localStorage.getItem("productos"));
let currentPageURL = window.location.href;
export let carrito = JSON.parse(sessionStorage.getItem("carrito"));

JSON.parse(sessionStorage.getItem("carrito")) === null &&
  sessionStorage.setItem("carrito", JSON.stringify([]));

function startingApp() {
  if (currentPageURL.includes("index")) {
    //close popup index
    popup1.addEventListener("click", () => {
      closePopup("popup1");
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
      productList(carrito);
      generarTotales();
    });

    closeButton.addEventListener("click", () => {
      closeCart();
    });

    closeCheckout.addEventListener("click", () => {
      closePopup("popup-checkout");
      //sweetAlert
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Gracias por tu compra tu pedido sera procesado!!',
        showConfirmButton: false,
        timer: 2500
      })
    });

    endBuy.addEventListener("click", () => {
      closeCart();
      document.getElementById("popup-checkout").style.display = "block";
      checkoutShop(carrito);


    });
  }
}

startingApp();
