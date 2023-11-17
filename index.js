window.onload = inicio;

function inicio() {
  document.querySelectorAll(".boton")[0].addEventListener("click", accion1);
  document.querySelectorAll(".boton")[1].addEventListener("click", accion2);
  document.querySelectorAll(".boton")[2].addEventListener("click", accion3);
     document.querySelectorAll(".boton")[3].onclick = accion4;

}
  
function accion1() {
  document.querySelector(".caja").innerHTML = "Agregar un texto";

}

function accion2() {
  document.querySelector(".caja").innerHTML = "<img src='img/guitar.svg'>";
 
}
function accion3() {
  document
    .querySelector(".caja")
    .insertAdjacentHTML(
      "beforeend",
      "<button></button>"
    );
  //con el += despues del innerHtml le agrego en este caso el boton sin eliminar el contenido anterior.
 // si lo hago con insertAdjacentHtml nos da la posibilidad de elegir donde insertar el contenido
  //beforebegin= antesde#caja afterbegin= delante de todo el contenido de #caja beforeend= detras de todo el contenido de #caja afterend= despues de la propia #caja


}
function accion4() {
  document.querySelector(".caja").innerHTML = "";
  //para vaciar caja unicamente debo dejar el contenido vacio con las dos comillas

}