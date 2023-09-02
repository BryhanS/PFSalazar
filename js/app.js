"use strict";

const divProducto = document.getElementById("shop");
const popup1 = document.getElementById("close-btn");
const closeButton = document.getElementById("closeShopping");
const listCart = document.getElementById("cartList");
const totalSum = document.getElementById("totalSum");

let productosDisponibles = JSON.parse(localStorage.getItem("productos"));
let currentPageURL = window.location.href;
JSON.parse(sessionStorage.getItem("carrito")) === null &&
  sessionStorage.setItem("carrito", JSON.stringify([]));

document.addEventListener("DOMContentLoaded", () => {
  productList();
});

let carrito = JSON.parse(sessionStorage.getItem("carrito"));

function closePopup() {
  document.getElementById("popup1").style.display = "none";
}

function closeCart() {
  document.getElementById("idCart").classList.add("close");
}

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
        <button id="btn-${id}" type="button">add to cart</button>
    
    `;

    divProducto.appendChild(card);

    const btnComprar = document.getElementById(`btn-${id}`);
    btnComprar.addEventListener("click", () => comprarProducto(id));
  });
};

const comprarProducto = (idProducto) => {
  document.getElementById("idCart").classList.remove("close");

  const producto = productosDisponibles.find(
    (producto) => producto.id === idProducto
  );

  const { id, nombre, precio, imagen } = producto;

  const productoCarrito = carrito.find(
    (producto) => producto.id === idProducto
  );

  if (productoCarrito === undefined) {
    const nuevoProductoCarrito = {
      id: id,
      nombre: nombre,
      precio: precio,
      imagen: imagen,
      cantidad: 1,
    };
    carrito.push(nuevoProductoCarrito);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
  } else {
    const indexProductoCarrito = carrito.findIndex(
      (producto) => precio.id === idProducto
    );
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
  }

  carrito = JSON.parse(sessionStorage.getItem("carrito"));
  productList();
};

const productList = () => {
  listCart.innerHTML = "";
  carrito.forEach((producto) => {
    const { imagen, cantidad, precio, id, monto } = producto;

    if (producto != null) {
      let cardLi = document.createElement("li");
      cardLi.innerHTML = `
        
        <img src="../assets/img/${imagen}" alt="" />
  
        <div class="input-group">
          <button id="-${id}" class="minus-item input-group-addon btn btn-primary">
            -
          </button>
          <input
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
        <p class="monto">s/ ${(precio * cantidad).toFixed(2)}</p>
      `;
      listCart.append(cardLi);
    }

    const btnAdd = document.getElementById(`+${id}`);
    const btnDecrease = document.getElementById(`-${id}`);

    btnAdd.addEventListener("click", () => addCantidad(id));
    btnDecrease.addEventListener("click", () => decreaseCantidad(id));
  });
  generarTotales();
};

const generarTotales = () => {
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

const addCantidad = (id) => {
  const indexProductoCarrito = carrito.findIndex(
    (producto) => producto.id === id
  );
  carrito[indexProductoCarrito].cantidad++;

  sessionStorage.setItem("carrito", JSON.stringify(carrito));
  productList();
  generarTotales();
};

const decreaseCantidad = (id) => {
  const indexProductoCarrito = carrito.findIndex(
    (producto) => producto.id === id
  );
  carrito[indexProductoCarrito].cantidad--;

  if (carrito[indexProductoCarrito].cantidad === 0) {
    carrito.splice(indexProductoCarrito, 1);
  }

  sessionStorage.setItem("carrito", JSON.stringify(carrito));
  productList();
  generarTotales();
};

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
    document.addEventListener("DOMContentLoaded", () => {
      CardsProducts(productosDisponibles);
    });

    closeButton.addEventListener("click", () => {
      closeCart();
    });
  }
}

startingApp();
