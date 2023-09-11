"use strict";
import { generarTotales } from "./operator.js";
const tableCheckout = document.getElementById("tablePay");

export const checkoutShop = (carrito) => {
  tableCheckout.innerHTML = `
  <thead>
    <th>Descripccion</th>
    <th>Cantidad</th>
    <th>Precio</th>
    <th>Monto</th>
  </thead>
  `;
  let tbdoy = document.createElement("tbody");
  carrito.forEach((producto) => {
    const { nombre, cantidad, precio } = producto;
    let tableData = document.createElement("tr");
    tableData.innerHTML = `

      <td>${nombre}</td>
      <td>${cantidad.toFixed(2)}</td>
      <td>${precio.toFixed(2)}</td>
      <td>${(precio * cantidad).toFixed(2)}</td>

    `;

    tbdoy.appendChild(tableData);
  });
  tableCheckout.append(tbdoy);

  let tfoot = document.createElement("tfoot");
  tfoot.innerHTML = `
      <tr>
        <td></td>
        <td></td>
        <td>Total</td>
        <td>${generarTotales()}</td>
      </tr>
    `;
  tableCheckout.appendChild(tfoot);
};
