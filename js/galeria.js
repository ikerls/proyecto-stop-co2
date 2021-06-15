var galeria = document.getElementById("Gal");
var btnG = document.getElementById("btnG");
var imagenes = document.querySelectorAll("#Gal .hidden");
var btnJ = document.getElementById("btnJornada");
var btnS = document.getElementById("btnS");
var btnF = document.getElementById("btnF");
var btnA = document.getElementById("btnA");
var btn22 = document.getElementById("btn22");
var btnR = document.getElementById("btnR");
var btnK = document.getElementById("btnK");
// texto de información de cada galería
var infoGym = document.getElementById("infoGymkana");
var infoJornada = document.getElementById("infoJornada");
var infoSemana = document.getElementById("infoSemana");
var infoRopa = document.getElementById("infoRopa");
var infoArbol = document.getElementById("infoArbol");
var menoriaJornada = document.getElementById("menoriaJornada");
var documento = document.querySelectorAll("iframe");
var info22Abril = document.getElementById("info22abril");
var declaracion = document.getElementById("declaracion");
var retos = document.getElementById("retosCiclos");
var kimua = document.getElementById("infoKimua");
btnG.addEventListener("click", function () {
  filtro("gynkana");
  window.location.href = "#infoGymkana";
});
btnJ.addEventListener("click", function () {
  filtro("jornadaStop");
  window.location.href = "#infoJornada";
});
btnS.addEventListener("click", function () {
  filtro("semanaCultural");
  window.location.href = "#infoSemana";
});
btnF.addEventListener("click", function () {
  filtro("ropaFPB");
  window.location.href = "#infoRopa";
});
btnA.addEventListener("click", function () {
  filtro("arboles");
  window.location.href = "#infoArbol";
});
btn22.addEventListener("click", function () {
  filtro("22abril");
  window.location.href = "#info22abril";
});
btnR.addEventListener("click", function () {
  filtro("reto");
  window.location.href = "#retosCiclos";
});
btnK.addEventListener("click", function () {
  filtro("kimua");
  window.location.href = "#infoKimua";
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
      menoriaJornada.classList.contains("hidden")
        ? menoriaJornada.classList.replace("hidden", "block")
        : menoriaJornada.classList.replace("block", "hidden");
      //documento.item(0).classList.contains("hidden")
      //  ? documento.item(0).classList.replace("hidden", "block")
      //  : documento.item(0).classList.replace("block", "hidden");
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
    case "22abril":
      info22Abril.classList.contains("hidden")
        ? info22Abril.classList.replace("hidden", "block")
        : info22Abril.classList.replace("block", "hidden");
      declaracion.classList.contains("hidden")
        ? declaracion.classList.replace("hidden", "block")
        : declaracion.classList.replace("block", "hidden");
      //documento.item(1).classList.contains("hidden")
      //  ? documento.item(1).classList.replace("hidden", "block")
      //  : documento.item(1).classList.replace("block", "hidden");
      break;
    case "reto":
      retos.classList.contains("hidden")
        ? retos.classList.replace("hidden", "block")
        : retos.classList.replace("block", "hidden");
      break;
    case "kimua":
      kimua.classList.contains("hidden")
        ? kimua.classList.replace("hidden", "block")
        : kimua.classList.replace("block", "hidden");
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
