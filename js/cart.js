"use strict";

import { addCantidad, decreaseCantidad } from "./operator.js";

const listCart = document.getElementById("cartList");

export const productList = (carrito) => {
  listCart.innerHTML = "";
  carrito.forEach((producto) => {
    const { imagen, cantidad, precio, id } = producto;
    if (producto != null) {
      let cardLi = document.createElement("li");
      cardLi.innerHTML = `
          
          <img src="../assets/img/${imagen}" alt="" />
    
          <div class="input-group">
            <button id="-${id}" class="minus-item input-group-addon btn btn-primary">
              -
            </button>
            <input
            id="in-${id}"            
              type="number"
              class="item-count form-control"
              min="0"
              max="100"
              value = ${cantidad}
            />
            <button id="+${id}" class="plus-item btn btn-primary input-group-addon">
              +
            </button>
          </div>
          <p class="precio">s/. ${precio.toFixed(2)}</p>
          <p id="m-${id}" class="monto">S/. ${(precio * cantidad).toFixed(
        2
      )}</p>
        `;
      listCart.append(cardLi);
    }

    const btnAdd = document.getElementById(`+${id}`);
    const btnDecrease = document.getElementById(`-${id}`);

    btnAdd.addEventListener("click", () => addCantidad(id));
    btnDecrease.addEventListener("click", () => decreaseCantidad(id));
  });
};
