var galeria = document.getElementById("Gal");
var btnG = document.getElementById("btnG");
var imagenes = document.querySelectorAll("#Gal .hidden");
var btnJ = document.getElementById("btnJornada");
var btnS = document.getElementById("btnS");
var btnF = document.getElementById("btnF");
var btnA = document.getElementById("btnA");
// texto de informacion de cada galeria
var infoGym = document.getElementById("infoGymkana");
var infoJornada = document.getElementById("infoJornada");
var infoSemana = document.getElementById("infoSemana");
var infoRopa = document.getElementById("infoRopa");
var infoArbol = document.getElementById("infoArbol");
btnG.addEventListener("click", function () {
  filtro("gynkana");
});
btnJ.addEventListener("click", function () {
  filtro("jornadaStop");
});
btnS.addEventListener("click", function () {
  filtro("semanaCultural");
});
btnF.addEventListener("click", function () {
  filtro("ropaFPB");
});
btnA.addEventListener("click", function () {
  filtro("arboles");
});

function filtro(c) {
  // limpia la galeria
  for (let i = 0; i < imagenes.length; i++) {
    if (imagenes[i].classList.contains("block")) {
      imagenes[i].classList.replace("block", "hidden");
    }
  }
  switch (c) {
    case "gynkana":
      infoGym.classList.contains("hidden")
        ? infoGym.classList.replace("hidden", "block")
        : infoGym.classList.replace("block", "hidden");
      break;
    case "jornadaStop":
      infoJornada.classList.contains("hidden")
        ? infoJornada.classList.replace("hidden", "block")
        : infoJornada.classList.replace("block", "hidden");
      break;
    case "semanaCultural":
      infoSemana.classList.contains("hidden")
        ? infoSemana.classList.replace("hidden", "block")
        : infoSemana.classList.replace("block", "hidden");
      break;
    case "ropaFPB":
      infoRopa.classList.contains("hidden")
        ? infoRopa.classList.replace("hidden", "block")
        : infoRopa.classList.replace("block", "hidden");
      break;
    case "arboles":
      infoArbol.classList.contains("hidden")
        ? infoArbol.classList.replace("hidden", "block")
        : infoArbol.classList.replace("block", "hidden");
      break;
    default:
      break;
  }
  for (let i = 0; i < imagenes.length; i++) {
    if (imagenes[i].alt === c) {
      imagenes[i].classList.replace("hidden", "block");
    }
  }
}
