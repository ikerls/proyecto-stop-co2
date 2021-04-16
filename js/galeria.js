const galeria = document.getElementById("Gal");
const btnG = document.getElementById("btnG");
const imagenes = document.querySelectorAll("#Gal .hidden");
const btnJ = document.getElementById("btnJornada");
const btnS = document.getElementById("btnS");
const btnF = document.getElementById("btnF");
const btnA = document.getElementById("btnA");
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
  for (let i = 0; i < imagenes.length; i++) {
    if (imagenes[i].alt === c) {
      imagenes[i].classList.replace("hidden", "block");
    }
  }
}
