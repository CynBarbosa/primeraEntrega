const juegos = [
  { id: 1, nombre: "Tomb Raider", precio: 1 },
  { id: 2, nombre: "Tomb Raider II" , precio: 1 },
  { id: 3, nombre: "Tomb Raider III" , precio: 2 },
  { id: 4, nombre: "Tomb Raider: The Last Revelation" , precio: 2 },
  { id: 5, nombre: "Tomb Raider Chronicles" , precio: 3 },
  { id: 6, nombre: "Tomb Raider: The Angel of Darkness" , precio: 4 },
  { id: 7, nombre: "Tomb Raider: Legend" , precio: 5 },
  { id: 8, nombre: "Tomb Raider: Anniversary" , precio: 5 },
  { id: 9, nombre: "Tomb Raider: Underworld" , precio: 8 },
  { id: 10, nombre: "Lara Croft and the Guardian of Light" , precio: 10 },
  { id: 11, nombre: "Lara Croft y el Templo de Osiris" , precio: 20 },
  { id: 12, nombre: "Lara Croft: Relic Run" , precio: 25 },
  { id: 13, nombre: "Lara Croft Go" , precio: 30 },
  { id: 14, nombre: "Rise of the Tomb Raider" , precio: 35 },
  { id: 15, nombre: "Shadow of the Tomb Raider" , precio: 35 },
  { id: 16, nombre: "Tomb Raider Reloaded" , precio: 35 },
];
for(let i = 0; i < juegos.length; i++){
  console.log("numero: " + juegos[i].id,"nombre: " + juegos[i].nombre,"precio: " + juegos[i].precio)
};

let usuario = []
const comprarJuegos = () => {
  let id = Number(prompt("Elija un Juego: "));
  for(let i = 0; i < juegos.length; i++){
    if(juegos[i].id === id){
      usuario.push(juegos[i])
      console.log(usuario)
      console.log("El juego ingresado es: "+ juegos[i].nombre)
      console.log("El juego vale $" + juegos[i].precio);
    }
  }
};

comprarJuegos();

let continuar = confirm("quieres agregar un mas juegos?");
while(continuar){
  comprarJuegos()
  continuar = confirm("quieres agregar otro?");
};
let totalAPagar = 0
for(let i = 0; i < usuario.length; i++){
  totalAPagar += usuario[i].precio
  console.log("Su total a pagar es: $" + totalAPagar)
}

