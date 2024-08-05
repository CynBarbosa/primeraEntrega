let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const tarjJuego = (arrayJuegos) => {
  let contenedorCarrito = document.getElementById("contenedorCarrito");
  contenedorCarrito.innerHTML = "";

  arrayJuegos.forEach((juego) => {
    let juegosCard = document.createElement("div");
    juegosCard.className = "juego";
    juegosCard.innerHTML = `
        <img id="img" src${juego.imagen} />
        <h3>${juego.nombre}</h3>
        <p class="price">U$D ${juego.precio}.00</p>
        <button onclick="eliminarDelCarrito(${juego.id})">
        Eliminar</button>`;
    contenedorCarrito.appendChild(juegosCard);
  });
};
tarjJuego(carrito);

const eliminarDelCarrito = (id) => {
  carrito = carrito.filter((elemento) => elemento.id !== id);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  tarjJuego(carrito);
};
