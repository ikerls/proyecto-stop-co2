const boton = document.querySelector("#boton");
const menu = document.querySelector("#menu");

boton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

const botonidiomas = document.querySelector("#botonIdiomas");
const menuidiomas = document.querySelector("#menuIdiomas");

botonidiomas.addEventListener("click", () => {
  menuidiomas.classList.toggle("hidden");
});
