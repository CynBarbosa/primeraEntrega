const juegos = [
  {
    id: 1,
    nombre: "Tomb Raider",
    precio: 1.0,
    imagen: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    nombre: "Tomb Raider II",
    precio: 1.0,
    imagen: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    nombre: "Tomb Raider III",
    precio: 2.0,
    imagen: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    nombre: "Tomb Raider: The Last Revelation",
    precio: 2.0,
    imagen: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    nombre: "Tomb Raider Chronicles",
    precio: 3.0,
    imagen: "https://via.placeholder.com/100",
  },
  {
    id: 6,
    nombre: "Tomb Raider: The Angel of Darkness",
    precio: 4.0,
    imagen: "https://via.placeholder.com/100",
  },
  {
    id: 7,
    nombre: "Tomb Raider: Legend",
    precio: 5.0,
    imagen: "https://via.placeholder.com/100",
  },
  {
    id: 8,
    nombre: "Tomb Raider: Anniversary",
    precio: 5.0,
    imagen: "https://via.placeholder.com/100",
  },
  {
    id: 9,
    nombre: "Tomb Raider: Underworld",
    precio: 8.0,
    imagen: "https://via.placeholder.com/100",
  },
  {
    id: 10,
    nombre: "Lara Croft and the Guardian of Light",
    precio: 10.0,
    imagen: "https://via.placeholder.com/100",
  },
  {
    id: 11,
    nombre: "Lara Croft y el Templo de Osiris",
    precio: 20.0,
    imagen: "https://via.placeholder.com/100",
  },
  {
    id: 12,
    nombre: "Lara Croft: Relic Run",
    precio: 25.0,
    imagen: "https://via.placeholder.com/100",
  },
  {
    id: 13,
    nombre: "Lara Croft Go",
    precio: 30.0,
    imagen: "https://via.placeholder.com/100",
  },
  {
    id: 14,
    nombre: "Rise of the Tomb Raider",
    precio: 35.0,
    imagen: "https://via.placeholder.com/100",
  },
  {
    id: 15,
    nombre: "Shadow of the Tomb Raider",
    precio: 35.0,
    imagen: "https://via.placeholder.com/100",
  },
  {
    id: 16,
    nombre: "Tomb Raider Reloaded",
    precio: 35.0,
    imagen: "https://via.placeholder.com/100",
  },
];
for (let i = 0; i < juegos.length; i++) {
  console.log(
    "numero: " + juegos[i].id,
    "nombre: " + juegos[i].nombre,
    "precio: " + juegos[i].precio
  );
}

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const tarjJuego = (arrayJuegos) => {
  let containerJuego = document.getElementById("contenedorJuegos");
  containerJuego.innerHTML = "";

  arrayJuegos.forEach((juego) => {
    let juegosCard = document.createElement("div");
    juegosCard.className = "juego";
    juegosCard.innerHTML = `
        <img id="img" src${juego.imagen} />
        <h3>${juego.nombre}</h3>
        <p class="price">U$D ${juego.precio}.00</p>
        <button onclick="agregarAlCarrito(${juego.id})">
        Agregar al carrito</button>
    `;
    containerJuego.appendChild(juegosCard);
  });
};
tarjJuego(juegos);

const inputSearch = document.getElementById("search");
if (inputSearch) {
  inputSearch.addEventListener("input", (evento) => {
    let value = evento.target.value.toLowerCase();
    let arrayFiltrado = juegos.filter((juego) =>
      juego.nombre.toLowerCase().includes(value)
    );
    tarjJuego(arrayFiltrado);
  });
}

const agregarAlCarrito = (id) => {
  console.log(id);
  let juego = juegos.find((elemento) => elemento.id === id);
  let productoEnElCarrito = carrito.find((elemento) => elemento.id === id);
  if (productoEnElCarrito) {
    alert("ya esta en el carrito");
  } else {
    carrito.push(juego);
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  // if (productoEnElCarrito) {
  // }
};
// let usuario = []
// const comprarJuegos = () => {
//   let id = Number(prompt("Elija un Juego: "));
//   for(let i = 0; i < juegos.length; i++){
//     if(juegos[i].id === id){
//       usuario.push(juegos[i])
//       console.log(usuario)
//       console.log("El juego ingresado es: "+ juegos[i].nombre)
//       console.log("El juego vale $" + juegos[i].precio);
//     }
//   }
// };

// // let continuar = confirm("quieres agregar un mas juegos?");
// // while (continuar) {
// //   comprarJuegos();
// //   continuar = confirm("quieres agregar otro?");
// // }
// // let totalAPagar = 0;
// // for (let i = 0; i < usuario.length; i++) {
// //   totalAPagar += usuario[i].precio;
// //   console.log("Su total a pagar es: $" + totalAPagar);
// // }
