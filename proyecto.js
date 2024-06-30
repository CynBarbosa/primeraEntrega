// Tomb Raider (1996)(opcion 1) = u$d 1
// Tomb Raider II (1997)(opcion 2) u$d 1
// Tomb Raider III (1998)(opcion 3) u$d 2
// Tomb Raider: The Last Revelation (1999)(opcion 4) u$d 2
// Tomb Raider Chronicles (2000)(opcion 5) u$d 3
// Tomb Raider: The Angel of Darkness (2003)(opcion 6) u$d 4
// Tomb Raider: Legend (2006)(opcion 7) u$d 5
// Tomb Raider: Anniversary (2007)(opcion 8) u$d 5
// Tomb Raider: Underworld (2008)(opcion 9) u$d 8
// Lara Croft and the Guardian of Light (2010)(opcion 10) u$d 10
// Tomb Raider (2013)(opcion 11) u$d 15
// Lara Croft y el Templo de Osiris (2014)(opcion 12) u$d 20
// Lara Croft: Relic Run (2015)(opcion 13) u$d 25
// Lara Croft Go (2015)(opcion 14) u$d 30
// Rise of the Tomb Raider (2015)(opcion 15) u$d 35
// Shadow of the Tomb Raider (2018)(opcion 16) u$d 35
// Tomb Raider Reloaded (2023)(opcion 17) u$d 35

let carrito = (carritoDeCompra) => {
  let precio = 0;
  switch (carritoDeCompra) {
    case "1":
    case "2":
      return precio + 1;
    case "3":
    case "4":
      return precio + 2;
    case "5":
      return precio + 3;
    case "6":
      return precio + 4;
    case "7":
    case "8":
      return precio + 5;
    case "9":
      return precio + 8;
    case "10":
      return precio + 10;
    case "11":
      return precio + 15;
    case "12":
      return precio + 20;
    case "13":
      return precio + 25;
    case "14":
      return precio + 30;
    case "15":
    case "17":
    case "16":
      return precio + 35;
    default:
      return "No paga nada";
  }
};

let usuario = prompt("Elija un Juego del 1 al 17");
let totalApagar = carrito(usuario);
console.log("total a pagar: " + totalApagar);
